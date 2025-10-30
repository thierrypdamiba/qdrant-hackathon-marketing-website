import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Image Generation & Vector Search Hackathon | Sketch & Search',
  description: 'Build creative pipelines with Google DeepMind, Freepik, and Qdrant using image/video generation and vector search.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

