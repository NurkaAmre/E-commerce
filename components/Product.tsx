import Image from "next/image"
import Link from "next/link"
import ProductType from "@/types/ProductType"
import LikeButton from "@/components/LikeButton"

export default function Product({ product }: {product: ProductType } ){
  return (
    <Link href={`/product/${product.slug.current}`} key={product.id}>
      <div className="relative group">
        <Image
          src={product.imagesURL[0]}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover rounded-lg transition-transform transform group-hover:scale-110"
        />
        <LikeButton product={product}/>
        <div className="absolute flex gap-[2rem] items-center py-2 md:top-80 md:w-1/2 px-4 top-60 w-full justify-center bg-gray-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity product-details">
          <h3 className="text-white text-xl font-semibold">{product.name}</h3>
          <h2 className="text-white text-lg">{product.price}&#x20B8;</h2>
        </div>
      </div>
    </Link>
  )
}