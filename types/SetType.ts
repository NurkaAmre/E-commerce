export type ProductType = {
  _id: string;
  name: string;
  details: string;
  description: string;
  imagesUrls: string[];
  price: number;
  quantity: number;
  slug: {
    current: string;
  };
}