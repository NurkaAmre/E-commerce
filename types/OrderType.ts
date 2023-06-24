type OrderType = {
  id: string,
  status: string,
  amount: number,
  paymentId: string,
  deliveryStatus: string,
  deliveryDate: string,
  deliveryAssembly: boolean,
  user: UserType,
  address: AddressType,
  products: {product: ProductType, quantity: number, color: {hex: string}}[],
  createdAt: string,
}