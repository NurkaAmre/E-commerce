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
import logo from '@/public/logo.svg'

const Nav = ({ user }:  any) => {
  const cartStore = userCartStore()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const menuButtonClick = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  const categoriesButtonClick = () => {
    setShowCategoriesMenu(!showCategoriesMenu)
  }
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary action with the phone number (e.g., send it to the server)
    // You can access the phone number value with the phoneNumber variable
    // Reset the phone number input
    setPhoneNumber("");
    setName("")
    // Close the popup window
    closePopup();
  };

  return (
    <>
      <nav className="flex fixed justify-between text-gray-600 items-center gap-4 px-10 py-4 md:py-0 font-castoro w-full z-20">
      <button className="md:hidden text-3xl" onClick={menuButtonClick}>
        <AiOutlineMenu></AiOutlineMenu>
      </button>

      <Link href={'/'} className="hidden md:block">
        <Image src={logo} width={70} height={70} alt="logo" />
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

        <button role="form" className="hidden lg:flex ">
          <h3 className="mr-4 mt-2 cursor-pointer whitespace-nowrap" onClick={openPopup}>Обратный Звонок</h3>
          <div className="phone-anim relative" onClick={openPopup}>
            <FiPhoneCall className="text-xl phone-icon text-white absolute top-[0.7rem] left-[0.5rem]" />
          </div>
      </button>

      <ul className="flex items-center gap-6">
          <li onClick={() => cartStore.toggleCart()} className="cursor-pointer text-3xl relative">
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

      {showPopup && (
        <div className="fixed top-[20%] left-[35%] w-[30%] h-[50%] flex items-center justify-center z-50">
          <div className="bg-gray-950 bg-opacity-75 p-10 relative w-4/2 rounded-md popup">
            <h2 className="text-2xl font-bold mb-4 font-lobster text-white">Заказать звонок</h2>
            <span className="absolute text-4xl text-white top-0 right-5 cursor-pointer" onClick={closePopup}>&times;</span>
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Имя"
                className="border hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent w-full border-gray-300 rounded-full p-2 mb-4"
              />
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Телефон"
                className="border hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent w-full border-gray-300 rounded-full p-2 mb-4"
              />
              <div>
                <button
                  type="submit"
                  className="bg-blue-400 popup-btn w-full text-white font-light font-lobster rounded-full"
                >
                  Перезвоните мне
                </button>
              </div>
              <Link href="tel:+77087179128" className="mt-[2rem] text-center">
                <span className="text-white text-2xl underline md:text-3xl sm:text-xl">+7 708 717 91 28</span>
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav;