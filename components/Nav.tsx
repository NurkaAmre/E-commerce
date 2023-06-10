'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillShopping, AiFillHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"
import { userCartStore, userFavStore } from "@/store"
import UserOptions from "./UserOptions"
import SearchBar from "./SearchBar";
import Cart from "./Cart"
import logo from '@/public/logo3.svg'
import FavList from "./FavList"
import CallButton from "./CallButton"

const Nav = ({ user }:  any) => {
  const cartStore = userCartStore()
  const favListStore = userFavStore()
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
      <nav className="flex fixed justify-between text-gray-600 items-center gap-4 px-10 p-4 md:p-0 md:py-0 font-castoro w-full z-20">
      <button className="md:hidden text-3xl" onClick={menuButtonClick}>
        <AiOutlineMenu></AiOutlineMenu>
      </button>

      <Link href={'/'} className="hidden md:block">
          <Image src={logo} width={80} height={80} alt="logo" />
      </Link>

      <ul className="hidden md:flex">
          <li className="mr-6 cursor-pointer whitespace-nowrap group">
            <button role="list">Товары</button>
            <ul className="hidden absolute pr-[0.8rem] pl-[0.8rem] text-white pt-[0.3rem] pb-[0.3rem] group-hover:flex flex-col gap-1 hidden-category z-40">
              <li><Link href={'/category/kitchens'} className="li-hover">Кухня</Link></li>
              <li><Link href={'/category/chairs'} className="li-hover">Стул</Link></li>
              <li><Link href={'/category/sofas'} className="li-hover">Диван</Link></li>
              <li><Link href={'/category/beds'} className="li-hover">Спальня</Link></li>
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
      <CallButton />
      <ul className="flex items-center gap-6">
          <li onClick={() => cartStore.toggleCart()} className="cursor-pointer text-3xl relative">
          <AiFillShopping />
          <AnimatePresence>
              {cartStore.cart.length > 0 && (
                <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }} className="add-cart-point text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
                  {cartStore.cart.length}
                </motion.span>
              )}
          </AnimatePresence>
        </li>
        <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
        <li className="cursor-pointer text-3xl" onClick={() => favListStore.toggleFavList()}>
          <AiFillHeart />
          {favListStore.isOpen && <FavList userFavList={favListStore.favList} />}
        </li>
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
                  <li><Link href={'/category/kitchens'} className="li-hover">Кухня</Link></li>
                  <li><Link href={'/category/chairs'} className="li-hover">Стул</Link></li>
                  <li><Link href={'/category/sofas'} className="li-hover">Диван</Link></li>
                  <li><Link href={'/category/beds'} className="li-hover">Спальня</Link></li>
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