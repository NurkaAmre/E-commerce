'use client'

import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import logo1 from '@/public/Logo.svg'
import { userCartStore } from "@/store"
import { AiFillShopping, AiFillHeart } from 'react-icons/ai'
import SearchBar from "./SearchBar";
import { motion, AnimatePresence } from "framer-motion"
import { signIn, signOut } from "next-auth/react"
import UserOptions from "./UserOptions"
import { FiPhoneCall } from 'react-icons/fi';


const Nav = ({ user }:  any) => {
  const cartStore = userCartStore()
  return (
    <nav className="flex justify-between text-gray-600 items-center px-10 py-4 font-castoro relative">
      <Link href={'/'}>
        <Image src={logo1} width={70} height={70} alt="logo" />
      </Link>
      <div className="flex items-center">
        <Link href={'/category'}>
          <h3 className="nav-text mr-6 cursor-pointer">Товары</h3>
        </Link>
        <Link href={'/about'}>
          <h3 className="nav-text mr-6  cursor-pointer ">О Компании</h3>
        </Link>
        <Link href={'/sale'}>
          <h3 className="nav-text mr-6  cursor-pointer ">Акции</h3>
        </Link>
      </div>
      <SearchBar />
      <Link href={'/feedback'} className="flex items-center ">
        <h3 className="mr-4 cursor-pointer nav-text">Обратный Звонок</h3>
        <FiPhoneCall className="nav-icon text-3xl" />
      </Link>
      <ul className="flex items-center gap-6">
        <li onClick={() => cartStore.toggleCart()} className="flex items-center text-3xl relative cursor-pointer">
          <AiFillShopping className="cursor-pointer nav-icon " />
          <AnimatePresence>
          {cartStore.cart.length > 0 && (
              <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }} className="bg-primary text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </motion.span>
          )}
          </AnimatePresence>
        </li>
        <li className="flex items-center text-3xl relative cursor-pointer">
          <AiFillHeart className=" cursor-pointer  nav-icon " />
        </li>
        <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
        {user && (
          <UserOptions user={user} />
        )}
        {!user && (
          <button className=" nav-text" onClick={() => { signIn() }}>Логин</button>
        )}
      </ul>

    </nav>
  )
}

export default Nav;