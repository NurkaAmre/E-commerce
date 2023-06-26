"use client"

import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'

export default function Orders({ orders }: { orders: OrderType[]}) {
  console.log(orders)
  return (
    <motion.div layout>
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {orders ? orders.map((order) => (
          <div className="rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-md">
            <h2 className="text-xs font-medium">Код заказа: {order.id}</h2>
            <p className="text-xs font-[castoro]">
              Статус:
              {order.status === 'success' && (
                <span className="text-white py-1 bg-teal-500 rounded-full px-2 mx-2 text-xs">
                  Завершенный
                </span>
              )}
              {order.status === 'pending' && (
                <span className="text-white py-1 bg-orange-500 rounded-full px-2 mx-2 text-xs">
                  В ожидании
                </span>
              )}
              {order.status === 'failed' && (
                <span className="text-white py-1 bg-red-600 rounded-full px-2 mx-2 text-xs">
                  Отменено
                </span>
              )}
            </p>
            <p className="text-xs">
              Время: {new Date(order.createdAt).toLocaleString()}
            </p>
            {order.products.map(({product, quantity}) => (
              <div className="text-sm lg:flex items-center gap-4">
                <div className="py-2" >
                  <h2 className="py-2 font-[castoro] text-lg">{product.name}</h2>
                  <div className="flex items-baseline gap-4">
                    <Image
                      src={product.imagesURL[0]}
                      width={36}
                      height={36}
                      alt={product.name}
                      priority={true}
                      className="w-auto"
                    />
                    <p className="font-medium  text-gray-500">{product.price} KZT</p>
                    <p className="font-[castoro]">Количество: {quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <p className="font-medium py-2">
              Сумма: {order.amount} KZT
            </p>
          </div>
        )): (
          <div className="rounded-lg p-8 my-4 space-y-2 -inset-2 shadow-md">
              <h2 className="text-xs font-medium">Пусто</h2>
          </div>
        ) }
      </motion.div>
    </motion.div>
  )
}