import Image from "next/image";
import Link from "next/link";
import { createClient } from "next-sanity";
import { AiFillHeart } from "react-icons/ai";
import ProductType from "@/types/ProductType";


export default async function Category ({params}: {params: {name: string}}) {
  const category = params.name;
  const client = createClient({
    projectId: "mp896dw0",
    dataset: "production",
    useCdn: true,
  })
  const query = `*[_type == "product" && "${category}" in category[]->name.current]
                {_id, name, price, quantity, details, type, description, slug, quantity, "imagesURL": images[].asset->url, "category": category[]->name.current}`;
  const products = await client.fetch(query);
  return (
    <main className="p-20">
      <div className="text-gray-700 grid grid-cols-fluid gap-16 mt-6">
        {products?.map((product: ProductType) => (
          <Link href={`/product/${product.slug.current}`} key={product._id}>
            <div className="relative group">
              <Image
                src={product.imagesURL[0]}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover rounded-lg transition-transform transform group-hover:scale-110 relative"
              />
              <span className="absolute right-10 top-3">
                <AiFillHeart className="icon" />
              </span>
              <div className="absolute flex gap-24 items-center py-4 px-10 top-80 ml-10 justify-center bg-gray-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity product-details">
                <h3 className="text-white text-xl font-semibold">{product.name}</h3>
                <h2 className="text-white text-lg">{product.price}&#x20B8;</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>

  )
}
