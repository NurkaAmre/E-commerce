export type ProductType = {
  _id: string;
  name: string;
  details: string;
  description: string;
  imagesURL: string[];
  price: number;
  quantity: number;
  slug: {
    current: string;
  };
}

export default ProductType;