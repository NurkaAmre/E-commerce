import FavList from '@/components/FavList'
import Orders from '@/components/Orders'
import UserInfo from '@/components/UserInfo'
import getUser from '@/functions/getUser'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { AiOutlineInfoCircle, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineOrderedList } from 'react-icons/ai'

export default async function Account({ params: { option } }: { params: { option: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) 
    return (
      <main className="mt-[100px] flex min-h-[50vh]">
        <h1 className='text-lg text-red-400 font-castoro font-medium'>Для получения доступа к этой странице требуется авторизация.</h1>
      </main>
    )

  const user = await getUser(session.user.email)
  
  return (
    <main className="flex min-h-[60vh]">
      <nav className='pt-[150px] bg-[#EBE7DC] opacity-90'>
        <ul className='flex flex-col gap-4'>
          <li className='text-base font-castoro'>
            <Link
              href={"/account/info"}
              className=' flex gap-2 px-4 py-2 hover:bg-[#ebe5d1]'
            >
              <AiOutlineInfoCircle />
              <span className="hidden md:block whitespace-nowrap">Персональные Данные</span>
            </Link>
          </li>
          <li className='text-base font-castoro'>
            <Link
              href={"/account/orders"}
              className=' flex gap-2 px-4 py-2 hover:bg-[#ebe5d1]'
            >
              <AiOutlineShoppingCart />
              <span className="hidden md:block whitespace-nowrap">Корзина</span>
            </Link>
          </li>
          <li className='text-base font-castoro'>
            <Link 
              href={"/account/wishlist"}
              className=' flex gap-2 px-4 py-2 hover:bg-[#ebe5d1]'
            >
              <AiOutlineHeart className='text-lg' />
              <span className="hidden md:block  whitespace-nowrap">Избранное</span>
            </Link>
          </li>
        </ul>
      </nav>
      <section className='flex flex-col w-full pt-[150px] pb-10 px-4 md:px-[3rem]'>
        {option === 'info' && <UserInfo user={user} />}
        {option === 'orders' && <Orders />}
        {option === 'wishlist' && <FavList />}
      </section>
    </main>
  )
}