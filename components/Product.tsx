import Image from "next/image"
import Link from "next/link"

export default function Product({
  name, 
  image, 
  unit_amount,
  id,

  description,
  metadata,
 }: any ){
  const {features} = metadata
  return (
  <Link href={{ pathname: `/product/${id}`, query: {name, image, unit_amount, id, description, features} }}>
    <div>
      <Image src={image} alt={name} width={800} height={800} className="w-full h-96 object-cover rounded-lg"/>
      <div className="font-medium py-2">
        <h1>{name}</h1>
        <h2 className="text-sm text-primary">{unit_amount !== null ? unit_amount : 'N/A'}</h2>
      </div>
    </div>
  </Link>
  )
}