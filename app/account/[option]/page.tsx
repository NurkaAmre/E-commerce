import FavList from '@/components/FavList'
import Link from 'next/link'

export default function Account({ params: { option } }: { params: { option: string } }) {
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