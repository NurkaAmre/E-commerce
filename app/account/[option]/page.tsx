import FavList from '@/components/FavList'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Account({ params: { option } }: { params: { option: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) 
    return (
      <main className="mt-[100px] flex min-h-[50vh]">
        <h1>You need to login to access this page</h1>
      </main>
    )
  
  return (
    <main className="flex min-h-[60vh]">
      <nav className='pt-[100px] px-2'>
        <ul>
          <li><Link href={"/account/info"}>My Info</Link></li>
          <li><Link href={"/account/orders"}>My Orders</Link></li>
          <li><Link href={"/account/wishlist"}>WishList</Link></li>
        </ul>
      </nav>
      <section className='flex flex-col items-center w-full pt-[100px] pb-10 px-4'>
        {option === 'wishlist' && <FavList />}
      </section>
    </main>
  )
}