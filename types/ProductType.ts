type ProductType = {
  id: string;
  name: string;
  details: string;
  description: string;
  imagesURL: string[];
  price: number;
  discount?: number;
  quantity: number;
  slug: {
    current: string;
  };
}