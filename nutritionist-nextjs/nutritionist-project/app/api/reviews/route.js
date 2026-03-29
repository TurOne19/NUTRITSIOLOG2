import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('approved', true)
    .order('created_at', { ascending: false })

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}

export async function POST(req) {
  const body = await req.json()
  const { name, text, program, result, rating, photos } = body

  if (!name || !text || !rating) {
    return Response.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('reviews')
    .insert([{ name, text, program, result, rating, photos: photos || [], approved: false }])
    .select()
    .single()

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data, { status: 201 })
}
