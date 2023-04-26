'use client'

import { Session } from "next-auth"
import {signIn} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import { userCartStore } from "@/store"
import {AiFillShopping} from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"


const Nav = ({user}: Session) => {
  const cartStore = userCartStore()
  return (
    <nav className="flex justify-between items-center py-12">
      <Link href={'/'}>
        <h1>Styled</h1>
      </Link> 
      <ul className="flex items-center gap-12">
        <li onClick={() => cartStore.toggleCart()} className="flex items-center text-3xl relative cursor-pointer">
          <AiFillShopping />
          <AnimatePresence>
          {cartStore.cart.length > 0 && (
          <motion.span animate={{scale: 1}} initial={{scale: 0}} className="bg-primary text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </motion.span>
          )}
          </AnimatePresence>
        </li>
        {!user && (
          <li className="bg-primary text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>SignIn</button>
          </li>
        )}
        {user && (
          <Link href={'/dashboard'}>
          <li>
            <Image 
            src={user?.image as string} 
            alt={user.name as string} 
            width={38} 
            height={38}
            className="rounded-full"/>
          </li>
          </Link>
        )}
      </ul>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
    </nav>
  )
}

export default Nav;