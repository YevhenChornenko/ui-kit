import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/index.scss'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
