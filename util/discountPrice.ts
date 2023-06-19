const discountPrice = (price: number, discount: number | undefined) => {
  if (discount) {
    return price - (price * discount) / 100;
  }

  return price;
}

export default discountPrice;