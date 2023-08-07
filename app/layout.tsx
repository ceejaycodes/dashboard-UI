'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './header';

const poppins = Poppins({
  weight: ["200","400","600"],
  subsets: ['latin'] })

 const metadata: Metadata = {
  title: 'Metrix',
  description: 'Finance App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       {children}
        
        </body>
    </html>
  )
}
