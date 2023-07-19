import Image from "next/image";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";

export default function Product({ product }: { product: ProductType }) {
  return (
    <Link href={`/product/${product.slug.current}`} key={product.id}>
      <div className="flex flex-col mt-4 px-4 h-[270px] w-[280px] md:w-[375px] md:h-[375px] rounded-lg justify-center items-center -inset-2 shadow-2xl">
        <Image
          src={product.imagesURL[0]}
          alt={product.name}
          width={400}
          height={300}
          className="max-w-[250px] object-fill max-h-[130px] md:max-h-[230px] h-auto transform hover:scale-110 transition-transform duration-300 md:max-w-[300px]"
        />
        <div className="flex justify-center gap-5 items-center my-4 w-full max-w-[400px]">
          <div className="flex text-lg gap-2  text-gray-600 font-[dancingScript]">
            <h3 >{product.name}</h3>
            <h2>{product.price}&#x20B8;</h2>
          </div>
          <LikeButton product={product} />
        </div>
        <button className="btn my-3 rounded-full w-48 md:w-full py-1">
          Купить
        </button>
      </div>
    </Link>
  );
}
