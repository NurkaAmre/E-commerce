import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import Link from 'next/link'

export default function FavList ({ userFavList }: { userFavList: ProductType[]}) {
  return (
    <div className="flex flex-col items-center justify-center absolute right-10 bg-white border-2 border-red-500 min-h-[200px] min-w-[300px]">
      {
        userFavList.map((product: ProductType) => (
          <Link 
            href={`/product/${product.slug.current}`}
            className='flex items-center justify-center gap-4 border-2 border-gray-400'
          >
            <Image src={product.imagesURL[0]} width={70} height={70} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </Link>
        ))
      }
    </div>
  )
}