import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

//components
import Navbar from '@/components/Navbar'
import RedirectLogin from '@/components/RedirectLogin'
import { auth } from '../../lib/firebase/firebase'

export const dynamic = "force-dynamic";

const initialUser = auth.currentUser;

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
      <body className={inter.className}>
        <Navbar initialUser={initialUser}/>
        {children}
        <RedirectLogin />
      </body>
    </html>
  )
}