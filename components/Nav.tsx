'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillShopping, AiFillHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion"
import { userCartStore } from "@/store"
import UserOptions from "./UserOptions"
import SearchBar from "./SearchBar";
import Cart from "./Cart"
import logo from '@/public/logo2.png'

const Nav = ({ user }:  any) => {
  const cartStore = userCartStore()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false)
  const menuButtonClick = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  const categoriesButtonClick = () => {
    setShowCategoriesMenu(!showCategoriesMenu)
  }
  return (
    <>
    <nav className="flex fixed justify-between text-gray-600 items-center gap-4 px-10 py-4 font-castoro w-full z-20">
      <button className="md:hidden text-3xl" onClick={menuButtonClick}>
        <AiOutlineMenu></AiOutlineMenu>
      </button>

      <Link href={'/'} className="hidden md:block">
        <Image src={logo} width={70} height={70} alt="logo" />
      </Link>

      <ul className="hidden md:flex">
          <li className="mr-6 cursor-pointer whitespace-nowrap group">
            <Link href={'#'}>Товары</Link>
            <ul className="hidden absolute group-hover:flex flex-col gap-1 bg-gray-400 z-40 border-2 border-red-500">
              <li><Link href={'/category/chairs'} className="hover:text-white">Chairs</Link></li>
              <li><Link href={'/category/kitchens'} className="hover:text-white">Kitchens</Link></li>
              <li><Link href={'/category/sofas'} className="hover:text-white">Sofas</Link></li>
            </ul>
          </li>
          <li className="mr-6 cursor-pointer whitespace-nowrap">
            <Link href={'/about'}>О Компании</Link>
          </li>
          <li className="mr-6 cursor-pointer whitespace-nowrap">
            <Link href={'/sale'}>Акции</Link>
          </li>
      </ul>

      <SearchBar />

      <Link href={'/feedback'} className="hidden lg:flex">
        <h3 className="mr-4 cursor-pointer whitespace-nowrap">Обратный Звонок</h3>
        <FiPhoneCall className="text-3xl" />
      </Link>

      <ul className="flex items-center gap-6">
        <li onClick={() => cartStore.toggleCart()} className="cursor-pointer text-3xl">
          <AiFillShopping />
          <AnimatePresence>
          {cartStore.cart.length > 0 && (
              <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }} className="bg-primary text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </motion.span>
          )}
          </AnimatePresence>
        </li>
        <li className="cursor-pointer text-3xl">
          <AiFillHeart />
        </li>
        <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
        {user && (
          <li className="cursor-pointer w-10">
            <UserOptions user={user} />
          </li>
        )}
        {!user && (
          <li>
            <button className="cursor-pointer" onClick={() => { signIn() }}>Логин</button>
          </li>
        )}
      </ul>
    </nav>

    {showMobileMenu && (
      <nav className="fixed top-0 bottom-0 right-0 left-0 bg-gray-400 z-50">
        <button className="absolute right-1 top-1 text-3xl" onClick={menuButtonClick}>
          <AiOutlineClose></AiOutlineClose>
        </button>

        <Link href={'/'} className="block">
          <Image src={logo} width={70} height={70} alt="logo" />
        </Link>

        <ul className="flex flex-col ml-20">
          <li className="mr-6 cursor-pointer whitespace-nowrap" onClick={categoriesButtonClick}>
            <Link href={'#'} onClick={categoriesButtonClick}>Товары</Link>
            {showCategoriesMenu && (
              <ul className="flex flex-col ml-8">
                <li><Link href={'/category/chairs'} className="hover:text-white">Chairs</Link></li>
                <li><Link href={'/category/kitchens'} className="hover:text-white">Kitchens</Link></li>
                <li><Link href={'/category/sofas'} className="hover:text-white">Sofas</Link></li>
              </ul>
            )}
          </li>
          <li className="mr-6 cursor-pointer whitespace-nowrap">
            <Link href={'/about'}>О Компании</Link>
          </li>
          <li className="mr-6 cursor-pointer whitespace-nowrap">
            <Link href={'/sale'}>Акции</Link>
          </li>
        </ul>
      </nav>
    )}
    </>
  )
}

export default Nav;