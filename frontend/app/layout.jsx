import './globals.css'

export const metadata = {
  title: 'AegisTrust Platform',
  description: 'AI Defense Lab 2026 - Track 2',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}