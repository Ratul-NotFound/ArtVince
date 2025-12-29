import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import { GlobalStyles, CursorElements } from '@/components'

export const metadata: Metadata = {
  title: 'artvince - 3D design solutions',
  description: '3D design solutions for games, film, and commercial applications.',
  keywords: '3D design, animation, character modeling, game assets, visual effects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Rajdhani:wght@500;600;700&family=Syncopate:wght@700&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: #080808; color: #fff; font-family: 'Inter', sans-serif; }
        `}</style>
      </head>
      <body>
        <GlobalStyles />
        <CursorElements />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
