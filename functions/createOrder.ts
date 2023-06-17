'use server'

import SanityClient from "@/sanity/client";
import { CartItem } from "@/store";
import { randomUUID } from "crypto";
import getOrder from "./getOrder";

export default async function createOrder(cartItems: CartItem[], totalAmount: number, user: UserType) {
  let status = {code: 0, message: '', data: {}};
  const products = cartItems.map((item) => {
    return {
      _key: randomUUID(),
      quantity: item.quantity,
      product: {
        _type: 'reference',
        _ref: item.id,
      },
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
    const completeOrder = await getOrder(order._id);
    if (completeOrder.code === 200) {
      status.code = 200;
      status.message = 'Order created successfully';
      status.data = completeOrder.data;
    }
    return status;
  }

  status.code = 500;
  status.message = 'Something went wrong';
  return status;
}