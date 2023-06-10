import FavList from '@/components/FavList'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Account({ params: { option } }: { params: { option: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) 
    return (
      <main className="mt-[100px] flex">
        <h1>You need to login to access this page</h1>
      </main>
    )
  
  return (
    <main className="mb-20 flex">
      <nav className='pt-[100px] px-6'>
        <ul>
          <li><Link href={"/account/info"}>Info</Link></li>
          <li><Link href={"/account/orders"}>Orders</Link></li>
          <li><Link href={"/account/wishlist"}>Wish List</Link></li>
        </ul>
      </nav>
      <section className='pt-[100px]'>
        {option === 'wishlist' && <FavList />}
      </section>
    </main>
  )
}