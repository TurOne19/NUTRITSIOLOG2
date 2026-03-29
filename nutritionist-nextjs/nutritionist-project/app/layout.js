import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Юлия Петров — Нутрициолог',
  description: 'Нутрициолог в Эстонии. Персональный подход, без жёстких диет.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
      </head>
      <body>{children}</body>
    </html>
  )
}
