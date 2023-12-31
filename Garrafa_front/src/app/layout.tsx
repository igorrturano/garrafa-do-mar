import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'], weight: "400"})


export const metadata: Metadata = {
  title: 'Zencon - Garrafa no Mar',
  description: 'Garrafa no Mar MVP to Zencon: Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
