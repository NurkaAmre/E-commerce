'use client'
import { userCartStore } from "@/store"
import { useState } from "react"
import { CartItem } from "@/store"

const AddCartButton = (
  {
    product,
    color,
    quantity
  }: {
    product: ProductType,
    color: {hex: string},
    quantity: number
  }) => {
  const cartStore = userCartStore();
  const [added, setAdded] = useState(false);
  const cartIem = {
    id: product.id,
    name: product.name,
    details: product.details,
    description: product.description,
    price: product.price,
    discount: product.discount,
    imagesURL: product.imagesURL,
    color,
    quantity,
    stock: product.stock,
    slug: product.slug
  } as CartItem

  const handleAddToCart = () => {
    cartStore.addProduct(cartIem)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 500)
  }
  return (
    <>
    <button
    onClick={handleAddToCart} 
    disabled={added}
    className="bg-[#8CCCC1] text-white rounded-3xl cursor-pointer text-lg font-medium whitespace-nowrap hover:scale-110 transition-transform duration-500 ease-out px-4 py-2 min-w-[180px]">
      {!added && <span>В корзину</span>}
        {added && <span>Добавить</span>}
    </button>
    </>
  )
}

export default AddCartButton;