'use client'

import { Session } from "next-auth"
import {signIn} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import { userCartStore } from "@/store"

const Nav = ({user}: Session) => {
  const cartStore = userCartStore()
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={'/'}>
        <h1>Styled</h1>
      </Link> 
      <ul className="flex items-center gap-12">
        {!user && (
          <li className="bg-teal-400 text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>SignIn</button>
          </li>
        )}
        {user && (
          <li>
            <Image 
            src={user?.image as string} 
            alt={user.name as string} 
            width={38} 
            height={38}
            className="rounded-full"/>
          </li>
        )}
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  )
}

export default Nav;