import Image from "next/image"
import {SearchParamTypes} from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({searchParams}: SearchParamTypes) {
  return (
  <div className="flex flex-col 2xl:flex-row items-center justify-between gap-24">
    <Image 
    src={searchParams.image}
    alt={searchParams.name}
    width={600}
    height={600}
    className="w-full"
    />
    <div className="font-medium">
      <h2 className="text-2xl py-2">{searchParams.name}</h2>
      <p className="py-2">{searchParams.description}</p>
      <p className="py-2">{searchParams.features}</p>
      <div className="flex gap-2">
        <p className="font-bold text-primary">
          {searchParams.unit_amount  && formatPrice(searchParams.unit_amount)}
        </p>
      </div>
      <AddCart {...searchParams}/>
    </div>
  </div>
  )
}