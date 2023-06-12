import './globals.css'
import Nav from '../components/Nav'
import SearchBarMobile from '@/components/SearchBarMobile'
import Footer from '../components/Footer'
import Hydrate from '../components/Hydrate'
import { Roboto, Lobster_Two, Dancing_Script, Castoro, Pacifico } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'


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
  return (
    <html lang="ru" className={`${roboto.variable} ${lobster.variable} ${castoro.variable} ${cormorant.variable} ${dancing_script.variable}`}>
        <Hydrate>
        <Nav user={session?.user} />
        <SearchBarMobile />
        {children}
        <Footer />
        </Hydrate>
      
    </html>
  )
}
