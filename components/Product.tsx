import Image from "next/image"
import Link from "next/link"
import ProductType from "@/types/ProductType"
import LikeButton from "@/components/LikeButton"

export default function Product({ product }: {product: ProductType } ){
  return (
    <Link 
      href={`/product/${product.slug.current}`} 
      key={product.id}
      className="block relative group h-[200px] w-[300px]"
    >
      <Image
        src={product.imagesURL[0]}
        alt={product.name}
        fill={true}
        sizes="(max-width: 768px) 300px"
        className="object-cover rounded-lg transition-transform transform group-hover:scale-110"
      />
      <LikeButton product={product}/>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center py-4 px-10 justify-between w-[90%] bg-gray-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-transform group-hover:scale-110">
        <h3 className="text-white text-xl font-semibold">{product.name}</h3>
        <h2 className="text-white text-lg">{product.price}&#x20B8;</h2>
      </div>
    </Link>
  )
}