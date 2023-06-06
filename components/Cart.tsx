'use client'

import Image from 'next/image';
import { userCartStore } from '@/store';
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5';
import basket from '@/public/shopping-cart.png';
import {motion, AnimatePresence} from 'framer-motion'
import OrderConfirmed from './OrderConfirmed';

export default function Cart() {
  const cartStore = userCartStore()
  //Total Price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.price * item.cartQuantity
  }, 0)

  return (
    <motion.div 
    layout
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    onClick={() => cartStore.toggleCart()} 
      className='fixed w-full h-screen left-0 top-0 bg-black/25 z-40'>
      <motion.div 
      layout
      onClick={(e) => e.stopPropagation()} 
        className='bg-base-200 bg-opacity-75 absolute right-0 top-0 w-full h-screen lg:w-2/5 p-12 overflow-y-scroll'>
        {cartStore.onCheckout === 'cart' && (
          <button onClick={() => cartStore.toggleCart()} className='text-sm font-bold pb-12'>Вернуться в магазин</button>)}
        {cartStore.onCheckout === 'checkout' && (
          <button onClick={() => cartStore.setCheckout('cart')} className='text-sm font-bold pb-12'>Просмотреть корзину</button>)}
        {/* Card items */}
          {cartStore.onCheckout === 'cart' && (
            <>
        {cartStore.cart.map((item) => (
          <motion.div layout key={item.id}
            className='flex p-4 gap-4 bg-base-100 my-4 rounded-lg'>
            <Image className='rounded-md h-24' src={item.imagesURL[0]} alt={item.name} width={120} height={120}/>
            <div>
              <h2>{item.name}</h2>
              {/* Update quantity of a product */}
              <div className='flex gap-2'>
                <h2>Количество: </h2>
                 <button onClick={() => cartStore.removeProduct(item)}><IoRemoveCircle /></button>
                 <h2>{item.cartQuantity}</h2>
                 <button onClick={() => cartStore.addProduct(item)}><IoAddCircle /></button>
              </div>
              <p className='text-sm'>{item.price}</p>
            </div>
          </motion.div>
        ))}
        </>
          )}
        {/* Checkout and Total */}
        {cartStore.cart.length > 0 && cartStore.onCheckout === 'cart' ? (
        <motion.div layout>
            <p className=''>Сумма к оплате: {totalPrice}</p>
        <button 
        onClick={() => cartStore.setCheckout('checkout')}
              className='py-2 mt-4 btn w-full rounded-full text-white'>Оформить заказ</button> 
        </motion.div>
        ) : null}
        {/* {Checkout form} */}
        {cartStore.onCheckout === 'success' && <OrderConfirmed />}
        <AnimatePresence>
        {!cartStore.cart.length && cartStore.onCheckout === 'cart' && (
          <motion.div 
          animate={{scale: 0, rotateZ: 0, opacity: 0.75}}
          initial={{scale: 0.5, rotateZ: -10, opacity: 0}}
          exit={{scale: 0.5, rotateZ: -10, opacity: 0}}
          className='flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75'>
              <h1>Опаа.... Она пуста. </h1>
            <Image src={basket} alt="empty cart" width={200}  height={200}/>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
