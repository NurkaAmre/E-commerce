'use client'
import { userCartStore } from "@/store"
import { AddCartType } from "@/types/AddCartType"
import { useState } from "react"

const AddCart = ({
  name, 
  id, 
  image, 
  unit_amount,
  quantity,
} : AddCartType) => {
  const cartStore = userCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, unit_amount, quantity, image})
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 500)
  }
  return (
    <>
    <button onClick={handleAddToCart} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">
      Add to cart
    </button>
    </>
  )
}

export default AddCart;