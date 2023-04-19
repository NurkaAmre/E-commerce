import { Metadata } from "next";
import { type } from "os"

export type ProductType = {
  name: string,
  image: string,
  unit_amount: number | null,
  id: string,
  quantity?: number | 1,
  description: string | null,
  metadata: MetadataType,
}

type MetadataType = {
  features: string
}

export default ProductType;