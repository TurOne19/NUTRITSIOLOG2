import { supabase } from '@/lib/supabase'
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

function checkAuth(req) {
  const auth = req.headers.get('authorization')
  return auth === `Bearer ${process.env.ADMIN_SECRET}`
}

// GET /api/photos — все фото (публичный)
export async function GET() {
  const { data, error } = await supabase
    .from('photos')
    .select('key, url')

  if (error) return Response.json({ error: error.message }, { status: 500 })

  // Превращаем в объект { key: url }
  const map = {}
  for (const row of (data || [])) map[row.key] = row.url
  return Response.json(map)
}

// POST /api/photos — загрузить фото (admin only)
// Принимает multipart/form-data: { key, file }
export async function POST(req) {
  if (!checkAuth(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const formData = await req.formData()
  const key = formData.get('key')
  const file = formData.get('file')

  if (!key || !file) return Response.json({ error: 'Missing key or file' }, { status: 400 })

  const ext = file.name.split('.').pop()
  const path = `${key}.${ext}`
  const buffer = Buffer.from(await file.arrayBuffer())

  // Удаляем старый файл если есть
  await supabaseAdmin.storage.from('photos').remove([path])

  // Загружаем новый
  const { error: uploadError } = await supabaseAdmin.storage
    .from('photos')
    .upload(path, buffer, {
      contentType: file.type,
      upsert: true
    })

  if (uploadError) return Response.json({ error: uploadError.message }, { status: 500 })

  const { data: { publicUrl } } = supabaseAdmin.storage
    .from('photos')
    .getPublicUrl(path)

  // Сохраняем URL в таблицу photos
  const { error: dbError } = await supabaseAdmin
    .from('photos')
    .upsert({ key, url: publicUrl, updated_at: new Date().toISOString() })

  if (dbError) return Response.json({ error: dbError.message }, { status: 500 })

  return Response.json({ url: publicUrl })
}

// DELETE /api/photos — удалить фото (admin only)
export async function DELETE(req) {
  if (!checkAuth(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { key } = await req.json()

  // Удаляем из storage (пробуем оба расширения)
  await supabaseAdmin.storage.from('photos').remove([`${key}.jpg`, `${key}.png`, `${key}.webp`, `${key}.jpeg`])

  // Удаляем из таблицы
  await supabaseAdmin.from('photos').delete().eq('key', key)

  return Response.json({ ok: true })
}
