'use server'

import SanityClient from "@/sanity/client";
import { CartItem } from "@/store";
import { randomUUID } from "crypto";

export default async function createOrder(cartItems: CartItem[], totalAmount: number, user: UserType) {
  let status = {code: 0, message: '', data: {}};
  const products = cartItems.map((item) => {
    return {
      quantity: item.quantity,
      product: {
        _type: 'reference',
        _ref: item.id,
      }
    }
  })
  const order = await SanityClient.create({
    _type: 'order',
    status: 'pending',
    amount: totalAmount,
    user: {
      _type: 'reference',
      _ref: user.id
    },
    address: {
      _type: 'reference',
      _ref: user.address.id
    },
    products: products
  })

  if (order) {
    status.code = 200;
    status.message = 'Order created successfully';
    status.data = order;
  } else {
    status.code = 500;
    status.message = 'Something went wrong';
  }
  return status;
}