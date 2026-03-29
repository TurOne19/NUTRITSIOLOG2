# Nutritionist Site — Next.js + Supabase

## 🚀 Быстрый старт

### 1. Supabase — создай проект

1. Зайди на [supabase.com](https://supabase.com) → New Project
2. Открой **SQL Editor** и вставь содержимое файла `supabase_schema.sql` → Run
3. Перейди в **Storage** → New Bucket → назови `photos` → включи **Public bucket**
4. Скопируй из **Settings → API**:
   - `Project URL`
   - `anon` public key
   - `service_role` secret key (⚠️ никому не показывай)

### 2. Настрой переменные

Скопируй `.env.local` и заполни:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ADMIN_SECRET=придумай_любой_пароль
NEXT_PUBLIC_ADMIN_SECRET=тот_же_пароль
```

### 3. Запусти локально

```bash
npm install
npm run dev
```

Открой http://localhost:3000

### 4. Деплой на Vercel

1. Залей проект на GitHub
2. Зайди на [vercel.com](https://vercel.com) → Import Git Repository
3. В настройках проекта → **Environment Variables** добавь все 5 переменных из `.env.local`
4. Deploy!

---

## 🔑 Доступ в админку

Нажми кнопку 👤 в правом нижнем углу сайта.
Пароль: то что ты написал в `ADMIN_SECRET` (по умолчанию `julia2025`)

В админке можно:
- **Отзывы** — одобрить или удалить
- **Фотографии** — загрузить/заменить фото героя, раздела "О мне", результатов и галереи

## ⚠️ Безопасность

- `SUPABASE_SERVICE_ROLE_KEY` — ТОЛЬКО в серверных переменных Vercel, никогда не в `NEXT_PUBLIC_*`
- Поменяй `ADMIN_SECRET` на что-то сложное

## 📁 Структура проекта

```
app/
  page.js          — вся страница (React)
  layout.js        — HTML обёртка
  globals.css      — все стили
  api/
    reviews/       — GET (публичные) / POST (новый отзыв)
    admin/reviews/ — GET/PATCH/DELETE (только с паролем)
    photos/        — GET (публичные) / POST/DELETE (только с паролем)
lib/
  supabase.js      — клиент Supabase
supabase_schema.sql — SQL для БД
```
