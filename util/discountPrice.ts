const discountPrice = (price: number, discount: number) => {
  return price - ((discount / 100) * price)
}

export default discountPrice;