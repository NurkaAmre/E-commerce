"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { userCartStore } from '@/store';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import basket from '@/public/shopping-cart.png';
import { motion, AnimatePresence } from 'framer-motion'
import OrderConfirmed from './OrderConfirmed';
import set1 from '@/public/set1.png'

export default function Orders() {

  return (
    <motion.div layout>
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-md">
          <h2 className="text-xs font-medium">Order reference: #22-341-02</h2>
          <p className="text-xs font-castoro">
            Status:
            <span className="text-white py-1 bg-teal-500 rounded-full px-2 mx-2 text-xs">
              Completed
            </span>
          </p>
          <p className="text-xs">
            Time: {new Date().toString()}
          </p>
          <div className="text-sm lg:flex items-center gap-4">
            <div className="py-2" >
              <h2 className="py-2 font-castoro text-lg">Felis</h2>
              <div className="flex items-baseline gap-4">
                <Image
                  src={set1}
                  width={36}
                  height={36}
                  alt='set'
                  priority={true}
                  className="w-auto"
                />
                <p className="font-medium  text-gray-500">140000</p>
                <p className="font-castoro">Quantity: 1</p>
              </div>
            </div>
          </div>
          <p className="font-medium py-2">
            Total: 140000
          </p>
        </div>

        <div className="rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-md ">
          <h2 className="text-xs font-medium">Order reference: #22-341-02</h2>
          <p className="text-xs font-castoro">
            Status:
            <span className="text-white py-1 bg-orange-500 rounded-full px-2 mx-2 text-xs">
              Pending
            </span>
          </p>
          <p className="text-xs">
            Time: {new Date().toString()}
          </p>
          <div className="text-sm lg:flex items-center gap-4">
            <div className="py-2" >
              <h2 className="py-2 font-castoro text-lg">Felis</h2>
              <div className="flex items-baseline gap-4">
                <Image
                  src={set1}
                  width={36}
                  height={36}
                  alt='set'
                  priority={true}
                  className="w-auto"
                />
                <p className="font-medium  text-gray-500">140000</p>
                <p className="font-castoro">Quantity: 1</p>
              </div>
            </div>
          </div>
          <p className="font-medium py-2">
            Total: 140000
          </p>
        </div>

        <div className="rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-md ">
          <h2 className="text-xs font-medium">Order reference: #22-341-02</h2>
          <p className="text-xs font-castoro">
            Status:
            <span className="text-white py-1 bg-teal-500 rounded-full px-2 mx-2 text-xs">
              Completed
            </span>
          </p>
          <p className="text-xs">
            Time: {new Date().toString()}
          </p>
          <div className="text-sm lg:flex items-center gap-4">
            <div className="py-2" >
              <h2 className="py-2 font-castoro text-lg">Felis</h2>
              <div className="flex items-baseline gap-4">
                <Image
                  src={set1}
                  width={36}
                  height={36}
                  alt='set'
                  priority={true}
                  className="w-auto"
                />
                <p className="font-medium  text-gray-500">140000</p>
                <p className="font-castoro">Quantity: 1</p>
              </div>
            </div>
          </div>
          <p className="font-medium py-2">
            Total: 140000
          </p>
        </div>

        <div className="rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-md ">
          <h2 className="text-xs font-medium">Order reference: #22-341-02</h2>
          <p className="text-xs font-castoro">
            Status:
            <span className="text-white py-1 bg-orange-500 rounded-full px-2 mx-2 text-xs">
              Pending
            </span>
          </p>
          <p className="text-xs">
            Time: {new Date().toString()}
          </p>
          <div className="text-sm lg:flex items-center gap-4">
            <div className="py-2" >
              <h2 className="py-2 font-castoro text-lg">Felis</h2>
              <div className="flex items-baseline gap-4">
                <Image
                  src={set1}
                  width={36}
                  height={36}
                  alt='set'
                  priority={true}
                  className="w-auto"
                />
                <p className="font-medium text-gray-500">140000</p>
                <p className="font-castoro">Quantity: 1</p>
              </div>
            </div>
          </div>
          <p className="font-medium py-2">
            Total: 140000
          </p>
        </div>

      </motion.div>
    </motion.div>
  )
}