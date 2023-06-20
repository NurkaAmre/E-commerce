'use client'

import { userFavStore } from "@/store"
import Product from './Product'


export default function FavList () {
  const favList = userFavStore((state) => state.favList)

  return (
    <div className="px-[2rem]">
      <div className="grid grid-cols-fluid1 rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-2xl items-center gap-10 justify-center">
        {
          favList.map((product: ProductType) => (
            <div className='-inset-2 shadow-md rounded-md'>
              <Product product={product} />
            </div>
          ))
        }
      </div>
    </div>
  )
}