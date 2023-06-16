import SanityClient from "@/sanity/client";
import { CartItem } from "@/store";

export default async function createOrder(cartItems: CartItem[], totalAmount: number, user: UserType) {
  let status = {code: 0, message: '', data: null};
  const products = cartItems.map((item) => {
    return {
      _type: 'reference',
      _ref: item.id
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
}