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
    <button 
    onClick={handleAddToCart} 
    disabled={added}
    className="my-4 py-4 px-2 w-full btn-primary rounded-md">
      {!added && <span>Add to cart</span>}
      {added && <span>Adding to cart</span>}
    </button>
    </>
  )
}

export default AddCart;