import { Suspense } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Roboto, Lobster_Two, Dancing_Script, Castoro, Pacifico } from 'next/font/google'
import Nav from '../components/Nav'
import SearchBarMobile from '@/components/SearchBarMobile'
import Footer from '../components/Footer'
import LoadingAnimation from '@/components/loadingAnimation'
import './globals.css'
import getUser from '@/functions/getUser'


//Define main font
const roboto = Roboto({weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto'})
const dancing_script = Dancing_Script({weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-dancing'})
const castoro = Castoro({weight: ['400'], subsets: ['latin'], variable: '--font-castoro'})
const lobster = Lobster_Two({ weight: '700', subsets: ['latin'], variable: '--font-lobster' })
const cormorant = Pacifico({ weight: '400', subsets: ['cyrillic'], variable: '--font-cormorant' })

export const metadata = {
  title: 'Interior Mebel',
  description: 'Interior Mebel - интернет-магазин мебели в Казахстане',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.email)  
  return (
    <html lang="ru" className={`${roboto.variable} ${lobster.variable} ${castoro.variable} ${cormorant.variable} ${dancing_script.variable}`}>
      <body>
        {/* <Suspense fallback={<LoadingAnimation />}> */}
          <Nav user={user} />
          <SearchBarMobile />
          <Suspense fallback={<LoadingAnimation />}>
            {children}
          </Suspense>
          <Footer />
        {/* </Suspense> */}
      </body>
    </html>
  )
}
