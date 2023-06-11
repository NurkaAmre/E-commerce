'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/types/ProductType'
import { userFavStore } from "@/store"
import Product from './Product'


export default function FavList () {
  const favList = userFavStore((state) => state.favList)

  return (
    <div className="flex flex-col w-full items-center gap-4 justify-center">
      <h2>A list of products you liked</h2>
      <div className="flex flex-wrap w-full items-center gap-4 justify-center">
        {
          favList.map((product: ProductType) => (
            <Product product={product} />
          ))
        }
      </div>
    </div>
  )
}