'use server'

import SanityClient from "@/sanity/client";

export default async function getProduct(productSlug: string) {
  let status = {code: 0, message: '', data: {}};
  const query = `*[_type == "product" && slug.current == $productSlug][0]{
    "id": _id,
    name,
    price,
    stock,
    details,
    type,
    description,
    discount,
    slug,
    "imagesURL": images[].asset->url
  }`;

  const product = await SanityClient.fetch(query, {productSlug});

  if (product) {
    status.code = 200;
    status.message = 'Product fetched successfully';
    status.data = product;
  } else {
    status.code = 500;
    status.message = 'Something went wrong, could not reach the product details';
  }
  return status;
} 