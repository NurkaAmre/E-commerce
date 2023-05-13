import Link from "next/link";

export default function Nav() {
  return (
    <nav className="basis-1/4 border-2 border-red-700">
      <ul>
        <li><Link href="/admin/">Overview</Link></li>
        <li><Link href="/admin/products">Products</Link></li>
      </ul>
    </nav>
  )
}