-- ─── ТАБЛИЦА ОТЗЫВОВ ───
create table reviews (
  id bigint generated always as identity primary key,
  name text not null,
  text text not null,
  program text,
  result text,
  rating int check (rating between 1 and 5),
  photos text[] default '{}',
  approved boolean default false,
  created_at timestamptz default now()
);

-- ─── ТАБЛИЦА ФОТОГРАФИЙ ───
create table photos (
  key text primary key,  -- 'heroFoto', 'aboutFoto', 'gallery_0' и т.д.
  url text not null,
  updated_at timestamptz default now()
);

-- ─── RLS ПОЛИТИКИ ───
alter table reviews enable row level security;
alter table photos enable row level security;

-- Все могут читать одобренные отзывы
create policy "Public can read approved reviews"
  on reviews for select
  using (approved = true);

-- Все могут добавлять отзывы
create policy "Public can insert reviews"
  on reviews for insert
  with check (true);

-- Все могут читать фото
create policy "Public can read photos"
  on photos for select
  using (true);

-- ─── STORAGE BUCKET ───
-- Создай bucket "photos" в Supabase Dashboard → Storage
-- Сделай его публичным (Public bucket)
