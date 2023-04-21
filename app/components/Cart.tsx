'use client'

import Image from 'next/image';
import { userCartStore } from '@/store';

export default function Cart() {
  const cartStore = userCartStore()
  console.log(cartStore.isOpen)
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}
