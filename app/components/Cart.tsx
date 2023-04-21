'use client'

import Image from 'next/image';
import { userCartStore } from '@/store';
import formatPrice from '@/util/PriceFormat';
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5'

export default function Cart() {
  const cartStore = userCartStore()
  console.log(cartStore.isOpen)
  return (
    <div onClick={() => cartStore.toggleCart()} className='fixed w-full h-screen left-0 top-0 bg-black/25'>
      <div onClick={(e) => e.stopPropagation()} className='bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700'>
        <h1>Here's your shopping list</h1>
        {cartStore.cart.map((item) => (
          <div className='flex py-4 gap-4'>
            <Image className='rounded-md h-24' src={item.image} alt={item.name} width={120} height={120}/>
            <div>
              <h2>{item.name}</h2>
              {/* Update quantity of a product */}
              <div className='flex gap-2'>
                <h2>Quantity: {item.quantity}</h2>
                 <button onClick={() => cartStore.removeProduct({
                  id: item.id, 
                  image: item.image,
                  name: item.name,
                  quantity: item.quantity, 
                  unit_amount: item.unit_amount,
                 })}><IoRemoveCircle /></button>
                 <button onClick={() => cartStore.addProduct({
                  id: item.id, 
                  image: item.image,
                  name: item.name,
                  quantity: item.quantity, 
                  unit_amount: item.unit_amount,
                  })}><IoAddCircle /></button>
              </div>
              <p className='text-sm'>{formatPrice(item.unit_amount)}</p>
            </div>
          </div>
        ))}
        <button className='py-2 mt-4 bg-teal-700 w-full rounded-md text-white'>Checkout</button>
      </div>
    </div>
  )
}
