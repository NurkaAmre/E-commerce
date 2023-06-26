type ProductType = {
  id: string;
  name: string;
  type: string;
  category: string[];
  details: string;
  description: string;
  imagesURL: string[];
  colors: { hex: string }[];
  price: number;
  discount?: number;
  stock: number;
  slug: {
    current: string;
  };
}