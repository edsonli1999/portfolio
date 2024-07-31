import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Edson&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="author" href="https://edsons-portfolio-nextjs.vercel.app"></link>
        <meta name="author" content="Edson Li"></meta>
        <meta name="keywords" content="Edson,Portfolio,Resume"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
