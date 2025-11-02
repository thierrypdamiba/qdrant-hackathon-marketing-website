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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

