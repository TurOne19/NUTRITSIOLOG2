import { createClient } from '@supabase/supabase-js'

// Для admin используем service_role ключ (через серверную переменную)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

function checkAuth(req) {
  const auth = req.headers.get('authorization')
  return auth === `Bearer ${process.env.ADMIN_SECRET}`
}

// GET /api/admin/reviews — все отзывы (включая неодобренные)
export async function GET(req) {
  if (!checkAuth(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabaseAdmin
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

// PATCH /api/admin/reviews — одобрить отзыв
export async function PATCH(req) {
  if (!checkAuth(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { id, approved } = await req.json()
  const { error } = await supabaseAdmin
    .from('reviews')
    .update({ approved })
    .eq('id', id)

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ ok: true })
}

// DELETE /api/admin/reviews — удалить отзыв
export async function DELETE(req) {
  if (!checkAuth(req)) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()
  const { error } = await supabaseAdmin
    .from('reviews')
    .delete()
    .eq('id', id)

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ ok: true })
}
