import Image from "next/image"
import Link from "next/link"
import ProductType from "@/types/ProductType"
import LikeButton from "@/components/LikeButton"

export default function Product({ product }: {product: ProductType } ){
  return (
    <Link 
      href={`/product/${product.slug.current}`} 
      key={product.id}
      className="block relative group "
    >
      <div className="flex flex-col md:px-10 rounded-lg justify-center items-center -inset-2 shadow-2xl">
      <Image
        src={product.imagesURL[0]}
        alt={product.name}
        width={400}
        height={300}
          className="object-fill"
      />
        <LikeButton product={product} />
        <div className="flex flex-row text-lg gap-6 text-gray-600 font-dancing_script md:mt-[2rem]">
          <h3>{product.name}</h3>
          <h2>{product.price}&#x20B8;</h2>
        </div>
        <button className='btn my-4 rounded-full w-full py-2'>Купить</button>
      </div>
    </Link>
  )
}