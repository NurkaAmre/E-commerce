import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { FiPhoneCall } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center ">
          <Link href={'/products'}>
            <h3 className="text-white mr-6 cursor-pointer font-castoro text-lg">Category</h3>
          </Link>
          <Link href={'/aboutus'}>
            <h3 className="text-white mr-6 cursor-pointer font-castoro text-lg">About Us</h3>
          </Link>
          <Link href={'/sale'}>
            <h3 className="text-white mr-6 cursor-pointer font-castoro text-lg">Sale</h3>
          </Link>
        </div>
        <SearchBar />
        <Link href={'/feedback'} className="flex items-center text-white">
          <h3 className="mr-4 cursor-pointer font-castoro text-lg">FeedBack</h3>
           <FiPhoneCall className="text-white text-3xl" />
        </Link>
      </div>
    </header>
  )
}
