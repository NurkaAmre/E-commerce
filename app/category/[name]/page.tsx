import ProductType from "@/types/ProductType";
import SanityClient from "@/sanity/client";
import Product from "@/components/Product";


export default async function Category ({params}: {params: {name: string}}) {
  const category = params.name;
  const query = `*[_type == "product" && "${category}" in category[]->name.current]
                {"id": _id, name, price, quantity, details, type, description, slug, quantity, "imagesURL": images[].asset->url, "category": category[]->name.current}`;
  const products = await SanityClient.fetch(query);
  return (
    <main className="md:p-20 p-[2rem] mt-[4rem]">
      <div className="text-gray-700 grid gap-10 grid-cols-fluid justify-center mt-6">
        {products?.map((product: ProductType) => (
          <Product product={product} />
        ))}
      </div>
    </main>

  )
}
