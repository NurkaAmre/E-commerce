'use client'

import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import logo from '@/public/logo2.png'
import { userCartStore } from "@/store"
import {AiFillShopping, AiFillHeart} from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"
import DarkLight from "./DarkLight"
import { signIn, signOut } from "next-auth/react"
import UserOptions from "./UserOptions"


const Nav = ({ user }:  any) => {
  const cartStore = userCartStore()
  return (
    <nav className="flex justify-between items-center px-10 relative">
      <Link href={'/'}>
        <Image src={logo} width={50} height={50} alt="logo"/>
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
        <li className="flex items-center text-3xl relative cursor-pointer">
            <AiFillHeart />
        </li>
        {/* Dark mode */}
        <DarkLight />
      </ul>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
      {user && (
        <UserOptions user={user} />
      )}
      {!user && (
        <button onClick={() => { signIn() }}>Login</button>
      )}
    </nav>
  )
}

export default Nav;