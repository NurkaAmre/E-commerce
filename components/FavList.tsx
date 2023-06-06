import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import Link from 'next/link'

export default function FavList ({ userFavList }: { userFavList: ProductType[]}) {
  console.log(userFavList);
  
  return (
    <div className="flex flex-col items-center justify-center absolute">
      <Link href={'product url'}>
        <Image src={'/public/sofa.png'} width={70} height={70} alt={'Product'} />
        <h3>{'Product Name'}</h3>
        <p>{'Product Price'}</p>
      </Link>
    </div>
  )
}