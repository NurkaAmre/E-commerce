import { AiFillHeart } from 'react-icons/ai'
import ProductType from '@/types/ProductType'

export default function LikeButton({ product }: { product: ProductType }) {
  return (
    <span 
      className="absolute right-10 top-3 transition-transform transform group-hover:scale-110"
      onClick={() => console.log('clicked')}
    >
      <AiFillHeart className="icon" />
    </span>
  )
}