import { createClient } from "next-sanity";
import Image from "next/image";

export default async function Category ({params}: {params: {name: string}}) {
  const category = params.name;
  const client = createClient({
    projectId: "mp896dw0",
    dataset: "production",
    useCdn: true,
  })
  const query = `*[_type == "product" && category == "${category}"]{_id, name, price, quantity, details, slug, quantity, "imagesURL": images[].asset->url}`
  const products = await client.fetch(query);
  return (
    <div>
      <h2>All chairs:</h2>
      <div>
        {products?.map((product: any) => (
          <div key={product._id} className="border border-red-600 p-4">
            <h3>{product.name}</h3>
            <Image src={product.imagesURL[0]} alt={product.name} width={200} height={200} />
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
            <p>Details: {product.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
