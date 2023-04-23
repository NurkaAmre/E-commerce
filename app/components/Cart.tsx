'use client'

import Image from 'next/image';
import { userCartStore } from '@/store';
import formatPrice from '@/util/PriceFormat';
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5';
import basket from '@/public/shopping-cart.png';
import {motion, AnimatePresence} from 'framer-motion'

export default function Cart() {
  const cartStore = userCartStore()
  // console.log(cartStore.isOpen)
  //Total Price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount * item.quantity
  }, 0)

  return (
    <motion.div 
    layout
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    onClick={() => cartStore.toggleCart()} 
    className='fixed w-full h-screen left-0 top-0 bg-black/25'>
      <motion.div 
      onClick={(e) => e.stopPropagation()} 
      className='bg-white absolute right-0 top-0 w-full h-screen lg:w-2/5 p-12 overflow-y-scroll text-gray-700'>
        <button onClick={() => cartStore.toggleCart()} className='text-sm font-bold pb-12'>Back to Store</button>
        {cartStore.cart.map((item) => (
          <motion.div layout key={item.id}
          className='flex py-4 gap-4'>
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
          </motion.div>
        ))}
        {/* Checkout and Total */}
        {cartStore.cart.length > 0 && (
        <motion.div layout>
        <p>Total: {formatPrice(totalPrice)}</p>
        <button className='py-2 mt-4 bg-teal-700 w-full rounded-md text-white'>Checkout</button> 
        </motion.div>
        )}
        <AnimatePresence>
        {!cartStore.cart.length && (
          <motion.div 
          animate={{scale: 0, rotateZ: 0, opacity: 0.75}}
          initial={{scale: 0.5, rotateZ: -10, opacity: 0}}
          exit={{scale: 0.5, rotateZ: -10, opacity: 0}}
          className='flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75'>
            <h1>Uhh ohh... its empty </h1>
            <Image src={basket} alt="empty cart" width={200}  height={200}/>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
