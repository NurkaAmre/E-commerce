type ProductType = {
  id: string;
  name: string;
  details: string;
  description: string;
  imagesURL: string[];
  price: number;
  discount?: number;
  stock: number;
  slug: {
    current: string;
  };
}