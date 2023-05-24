import SanityClient from "@/sanity/client";
import Image from "next/image";

export default async function Set ({params}: {params: {slug: string}}) {
  const SetSlug = params.slug;
  const query = `*[_type == "set" && slug.current == '${SetSlug}']
                {name, slug, price, description, "SetImageUrl": image.asset->url,
                'products': products[]->{name, price, details, slug, quantity, "ProductImagesUrls": images[].asset->url}}`
  const queryResult = await SanityClient.fetch(query);
  const SetDetails = queryResult[0];
  return (
      <div className="w-96 mx-auto flex flex-col items-center">
        <h1>Set Details of ({SetDetails.name})</h1>
        <h3>Price: {SetDetails.price}</h3>
        <Image src={SetDetails.SetImageUrl} alt={SetDetails.name} width={200} height={200} />
        <p>{SetDetails.description}</p>
        <h2>Products:</h2>
        <div className="flex">
          {SetDetails.products.map((product) => (
            <div className="flex flex-col p-2 border border-red-500">
              <h2>Product: {product.name}</h2>
              <h3>Price: {product.price}</h3>
              <Image src={product.ProductImagesUrls[0]} alt={product.name} width={200} height={200} />
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
  )
}