'use server'

import SanityClient from "@/sanity/client";

export default async function getOrder(orderId: string) {
  let status = {code: 0, message: '', data: {}};
  const order = await SanityClient.fetch(`*[_type == "order" && _id == $orderId] {
    "id": _id,
    status,
    amount,
    user->{
      "id": _id,
      name,
      email,
      phone,
      image,
      address->{
        "id:" _id,
        street,
        city,
        zip
      }
    },
    address->{
      "id:" _id,
      street,
      city,
      zip
    },
    products[]->{
      "id": _id,
      name,
      type,
      details,
      description,
      price,
      discount,
      imagesURL,
      slug,
      stock,
      "imagesURL": images[].asset->url,
      "category": category[]->name.current
    }
  }[0]`, {orderId: orderId})

  if (order) {
    status.code = 200;
    status.message = 'Order fetched successfully';
    status.data = order;
  } else {
    status.code = 500;
    status.message = 'Something went wrong';
  }
  return status;
}