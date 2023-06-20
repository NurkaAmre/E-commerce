type OrderType = {
  id: string,
  status: string,
  amount: number,
  paymentId: string,
  user: UserType,
  address: AddressType,
  products: {product: ProductType, quantity: number}[],
  createdAt: string,
}