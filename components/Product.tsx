import Image from "next/image"
import Link from "next/link"
import LikeButton from "@/components/LikeButton"

export default function Product({ product }: {product: ProductType } ){
  return (
    
      <div className="flex flex-col px-10 h-[250px] w-[250px] md:w-[375px] md:h-[375px] rounded-lg justify-center items-center -inset-2 shadow-2xl">
      <Image
        src={product.imagesURL[0]}
        alt={product.name}
        width={400}
        height={300}
          className="object-fill"
      />
        <div className="flex justify-between items-center my-4 w-full max-w-[400px]">
          <div className="flex text-lg gap-6 text-gray-600 font-[dancingScript]">
            <h3>{product.name}</h3>
            <h2>{product.price}&#x20B8;</h2>
          </div>
          <LikeButton product={product} />
        </div>
        <Link 
          href={`/product/${product.slug.current}`} 
          key={product.id}
          className='btn my-4 rounded-full w-full py-2'
        >
          Купить
        </Link>
      </div>
    
  )
}