import Link from 'next/link'
import Image from "next/image"
import bedset from '@/public/bed-icon.png'
import chair from '@/public/chair-icon.png'
import sofa from '@/public/sofa.png'
import kitchen from '@/public/kitchen2.png'


export default function ProductSection() {
  return(
    <section className="grid grid-cols-2 grid-rows-2 w-4/5 mx-auto my-10">
      <Link href={'/category/sofas'} className="bg-[#ebe7dc] flex flex-col justify-center items-center p-10 md:m-6">
        <h3 className='text-white text-4xl font-castoro'>Диван</h3>
        <Image src={sofa} width={100} height={100} alt="Sofas" />
      </Link>
      <Link href={'/category/beds'} className="bg-[#d3e398] flex flex-col justify-center items-center p-10 md:m-6">
        <h3 className='text-white text-4xl font-castoro'>Спальня</h3>
        <Image src={bedset} width={100} height={100} alt="Bedset" />
      </Link>
      <Link href={'/category/chairs'} className="bg-[#d3e398] flex flex-col justify-center items-center p-10 md:m-6">
        <h3 className='text-white text-4xl font-castoro'>Стул</h3>
        <Image src={chair} width={100} height={100} alt="Chairs" />
      </Link>
      <Link href={'/category/kitchens'} className="bg-[#ebe7dc] flex flex-col justify-center items-center p-10 md:m-6">
        <h3 className='text-white text-4xl font-castoro'>Кухня</h3>
        <Image src={kitchen} width={100} height={100} alt="Kitchen" />
      </Link>
    </section>
  )
}