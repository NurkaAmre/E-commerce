import Link from "next/link"

export default function Page() {
  return (
    <section>
      <Link href="/admin/products/new">Add New Product</Link>
      <h1>Products</h1>
    </section>
  )
}