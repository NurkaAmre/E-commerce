import Product from "@/components/Product";
import SanityClient from "@/sanity/client";
import ProductType from "@/types/ProductType";

export default async function Search({ params }: { params: { query: string } }) {
  const query = params.query;
  const products = await SanityClient.fetch(
    `*[_type == "product" && (category[]->name.current match "${query}*" || name match "${query}*" || details match "${query}*" || description match "${query}*" || type match "${query}*" || slug match "${query}*")]{
    "id": _id,
    name,
    price,
    quantity,
    details,
    type,
    category,
    description,
    discount,
    slug,
    "imagesURL": images[].asset -> url
  }`);

  return (
    <main className="md:p-20 p-[2rem] mt-[4rem]">
      <div className="text-gray-700 grid gap-6 grid-cols-fluid justify-center mt-6">
        {products?.map((product: ProductType) => (
          <Product product={product} />
        ))}
        {/* handle empty response */}
        {products?.length === 0 && (
          <h2>No results found</h2>
        )}
      </div>
    </main>
  )
}