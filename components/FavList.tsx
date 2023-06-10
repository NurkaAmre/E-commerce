'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/types/ProductType'
import { userFavStore } from "@/store"


export default function FavList () {
  const favList = userFavStore((state) => state.favList)

  return (
    <div className="flex flex-col items-center gap-4 justify-center bg-white border-2 border-red-500 min-h-[200px] min-w-[300px]">
      {
        favList.map((product: ProductType) => (
          <Link 
            href={`/product/${product.slug.current}`}
            className='flex items-center justify-center gap-4 border-2 border-gray-400'
          >
            <Image src={product.imagesURL[0]} width={200} height={200} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </Link>
        ))
      }
    </div>
  )
}