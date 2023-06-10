'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/types/ProductType'
import { userFavStore } from "@/store"
import Product from './Product'


export default function FavList () {
  const favList = userFavStore((state) => state.favList)

  return (
    <div className="flex flex-wrap w-full items-center gap-4 justify-center">
      {
        favList.map((product: ProductType) => (
          <Product product={product} />
        ))
      }
    </div>
  )
}