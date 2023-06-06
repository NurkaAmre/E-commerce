'use client'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import ProductType from '@/types/ProductType'
import { userFavStore } from '@/store'

export default function LikeButton({ product }: { product: ProductType }) {
  const favStore = userFavStore()
  let isLiked = false;
  if (favStore.favList.find((item) => item.id === product.id)) {
    isLiked = true;
  }
  return (
    <span 
      className="absolute right-10 top-3 transition-transform transform group-hover:scale-110"
      onClick={(e) => {
        e.preventDefault()
        favStore.toggleProduct(product)
      }}
    >
      {!isLiked ? <AiOutlineHeart className="icon" /> : <AiFillHeart className="icon" />}
    </span>
  )
}