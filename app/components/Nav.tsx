'use client'

import { Session } from "next-auth"
import {signIn, signOut} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import logo from '@/public/logo.png'
import { userCartStore } from "@/store"
import {AiFillShopping, AiFillHeart} from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"
import DarkLight from "./DarkLight"


const Nav = ({user}: Session) => {
  const cartStore = userCartStore()
  return (
    <nav className="flex justify-between items-center px-10">
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
        {!user && (
          <li className="bg-primary text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>SignIn</button>
          </li>
        )}
        {user && (
          <Link href={'/dashboard'}>
          <li>
            <div className="dropdown dropdown-end cursor-pointer">
            <Image 
            src={user?.image as string} 
            alt={user.name as string} 
            width={38} 
            height={38}
            className="rounded-full"
            tabIndex={0}/>
            <ul tabIndex={0} className="dropdown-content menu p-4 space-y-4 shadow bg-base-100 rounded-box w-72">
              <Link 
              className="hover:bg-base-300 p-4 rounded-md" 
              href={'/dashboard'}
              onClick={() => {if(document.activeElement instanceof HTMLElement){
                document.activeElement.blur()
              }}}
              >
                Orders
              </Link>
              <li 
              className="hover:bg-base-300 p-4 rounded-md"
               onClick={() => {
                signOut()
                if(document.activeElement instanceof HTMLElement){
                document.activeElement.blur()
              }}}
              >
                Sign Out
              </li>
            </ul>
            </div>
          </li>
          </Link>
        )}
      </ul>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
    </nav>
  )
}

export default Nav;