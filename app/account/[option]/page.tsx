import FavList from '@/components/FavList'
import Orders from '@/components/Orders'
import UserInfo from '@/components/UserInfo'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { AiOutlineInfoCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

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
      <nav className='pt-[150px]'>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link href={"/account/info"} className='text-3xl block px-4 py-2 hover:bg-slate-400/25'>
              <AiOutlineInfoCircle />
              <span className="hidden">My Info</span>
            </Link>
          </li>
          <li>
            <Link href={"/account/orders"} className='text-3xl block px-4 py-2 hover:bg-slate-400/25'>
              <AiOutlineShoppingCart />
              <span className="hidden">My Orders</span>
            </Link>
          </li>
          <li>
            <Link href={"/account/wishlist"} className='text-3xl block px-4 py-2 hover:bg-slate-400/25'>
              <AiOutlineHeart />
              <span className="hidden">WishList</span>
            </Link>
          </li>
        </ul>
      </nav>
      <section className='flex flex-col items-center w-full pt-[150px] pb-10 px-4'>
        {option === 'info' && <UserInfo />}
        {option === 'orders' && <Orders />}
        {option === 'wishlist' && <FavList />}
      </section>
    </main>
  )
}