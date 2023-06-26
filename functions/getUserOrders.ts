'use server'

import SanityClient from "@/sanity/client";

export default async function getUserOrders(userId: string) {
  let status = {code: 0, message: '', data: {}};
  const orders = await SanityClient.fetch(`*[_type == "order" && user->_id == $userId] {
    "id": _id,
    status,
    amount,
    "createdAt": _createdAt,
    deliveryStatus,
    deliveryDate,
    deliveryAssembly,
    "user": user->{
      "id": _id,
      name,
      email,
      phone,
      image,
      "address": address->{"id": _id, street, city, zip}
    },
    "address": address->{
      "id": _id,
      street,
      city,
      zip
    },
    products[]{
      quantity,
      color,
      "product": product->{
      "id": _id,
      name,
      type,
      details,
      description,
      price,
      discount,
      slug,
      stock,
      "imagesURL": images[].asset->url,
      "category": category[]->name.current
      }
    }
  }`, {userId})

  if (orders) {
    status.code = 200;
    status.message = 'Order fetched successfully';
    status.data = orders;
  } else {
    status.code = 500;
    status.message = 'Something went wrong';
  }
  return status;
}