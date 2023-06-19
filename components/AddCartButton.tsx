'use client'
import { userCartStore } from "@/store"
import ProductType from "@/types/ProductType";
import { useState } from "react"

const AddCartButton = (product : ProductType) => {
  const cartStore = userCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    cartStore.addProduct(product)
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
    className="add-to-cart">
      {!added && <span>В корзину</span>}
        {added && <span>Добавить</span>}
    </button>
    </>
  )
}

export default AddCartButton;