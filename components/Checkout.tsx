'use client'

import { useState } from 'react'
import { AiFillEdit, AiFillInfoCircle } from 'react-icons/ai'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { userCartStore } from '@/store';
import updateUserData from '@/functions/updateUserData'
import discountPrice from '@/util/discountPrice';
import createOrder from '@/functions/createOrder';
import completePayment from '@/functions/completePayment';
import { useRouter } from 'next/navigation';
import getMinDeliveryDate from '@/util/getMinDeliveryDate';
import getKZCities from '@/util/getKZCities';

export default function Checkout({ user }: { user: UserType }) {
  const cartStore = userCartStore()
  const router = useRouter()
  // Total Price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + (discountPrice(item.price, item.discount) * (item.quantity as any))
  }, 0)

  const [message, setMessage] = useState('')

  // Order status
  const [isLoading, setIsLoading] = useState(false)

  // Shipping Information
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [street, setStreet] = useState(user.address?.street)
  const [city, setCity] = useState(user.address?.city)
  const [zip, setZip] = useState(user.address?.zip)
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryAssembly, setDeliveryAssembly] = useState(false)
  const [minDeliveryDate, setMinDeliveryDate] = useState(getMinDeliveryDate(city))

  // Event handlers
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const handlePhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
  }
  const handleStreetChange = (e: React.FormEvent<HTMLInputElement>) => {
    setStreet(e.currentTarget.value)
  }
  const handleCityChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value)
  }
  const handleZipChange = (e: React.FormEvent<HTMLInputElement>) => {
    setZip(e.currentTarget.value)
  }
  const handleDeliveryDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDeliveryDate(e.currentTarget.value)
  }
  const handleDeliveryAssemblyChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDeliveryAssembly(e.currentTarget.checked)
  }

  const userData = {
    id: user.id,
    name,
    phone,
    email,
    image: user.image,
    address: {
      id: user.address?.id,
      street,
      city,
      zip
    }
  }


  const completeOrder = async () => {
    // Set loading status
    setIsLoading(true)

    // Check if all fields are filled
    if (name && phone && email && street && city && zip) {
      // Update user data (address & contact info)
      const updateDataResponse = await updateUserData(userData)
      if (updateDataResponse.code === 200) {
        // Create order in database after user data is updated
        const deliveryInfo = {
          deliveryDate,
          deliveryAssembly
        }
        const createOrderResponse = await createOrder(cartStore.cart, totalPrice, userData, deliveryInfo)

        // Redirect user to payment page after order is created in database
        if (createOrderResponse.code === 200) {
          const payment = await completePayment(createOrderResponse.data as any, userData)
          if (payment.pg_status.pop() === 'ok') {
            cartStore.clearCart()
            cartStore.toggleCart()
            cartStore.setCheckout('cart')
            router.push(payment.pg_redirect_url.pop())
          }
        } else {
          setMessage(createOrderResponse.message)
        }
      } else {
        setMessage(updateDataResponse.message)
      }
    } else {
      setMessage('Пожалуйста, заполните все поля.')
    }
  }

  return (
    <div>
      <div>
        <div>
          {cartStore.cart.map((item) => (
            <motion.div layout key={item.id}
              className='flex p-4 gap-4 bg-base-100 my-2 rounded-lg'>
              <Image
                className='rounded-md h-24'
                src={item.imagesURL[0]}
                alt={item.name}
                width={120}
                height={120}
              />
              <div>

                <h2 className='font-[dancingScript]'>{item.name}</h2>
                <div className='flex gap-2'>
                  <h2 className='font-[lobster]'>Количество: {item.quantity} </h2>
                </div>
                <p className='font-semibold text-gray-400'>
                  {discountPrice(item.price, item.discount)}
                  <span className='text-teal-400 text-xs'>KZT</span>
                </p>
              </div>
            </motion.div>
          ))}
          <p className='font-bold font-roboto text-gray-600 mt-6'>
            Сумма к оплате: {totalPrice}
            <span className='text-teal-400 text-xs'>KZT</span>
          </p>
        </div>
      </div>

      {/* Shipping Information */}
      <div className='flex flex-row relative justify-between'>
        <AiFillInfoCircle className='absolute text-[#8CCCC1] top-6 text-2xl' />
        <h2 className='my-4 font-lobster pl-8 text-2xl mb-4 text-gray-700'>
          Информация о доставк
        </h2>
        <hr />
      </div>
      <div className='flex flex-col gap-4 justify-center relative'>
        <div className='flex flex-col'>
          <label className='head-little'>
            Имя<span className='text-red-600'>*</span> 
          </label>
          <input
            className='user-input text-xs font-roboto'
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='flex flex-col'>
          <label className='head-little'>
            Тел<span className='text-red-600'>*</span>
          </label>
          <input
            className='user-input text-xs font-roboto'
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className='flex flex-col'>
          <label className='head-little'>
            Адрес доставки<span className='text-red-600'>*</span>
          </label>
          <input
            className='user-input text-xs font-roboto'
            type="text"
            value={street}
            onChange={handleStreetChange}
          />
        </div>
        <div className='flex flex-col'>
          <label className='head-little'>
            Город<span className='text-red-600'>*</span>
          </label>
          <select
            className='user-input text-xs font-roboto'
            onChange={handleCityChange}
          >
            {getKZCities().map((cityname) => (
              <option
                value={cityname}
                selected={cityname === city ? true : false}
              >
                {cityname}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col text-gray-500'>
          <label className='head-little'>
            Индекс<span className='text-red-600'>*</span>
          </label>
          <input
            className='user-input text-xs font-roboto'
            type="text"
            value={zip}
            onChange={handleZipChange}
          />
        </div>
        <div>
          <label className='text-base font-roboto text-gray-700'>
            желаемая дата доставки
            <input
              type="date"
              min={minDeliveryDate}
              value={deliveryDate}
              onChange={handleDeliveryDateChange}
              name="deliveryDate"
              className='ml-[2rem] text-teal-400 rounded-lg p-2'
            />
          </label>
        </div>

        <div>
          <label className='text-base font-lobster text-gray-700'>
            Требуется сборка
            <input
              type="checkbox"
              name="deliveryAssembly"
              onChange={handleDeliveryAssemblyChange}
              checked={deliveryAssembly}
              className='mx-2 text-teal-300 rounded-full'
            />
          </label>
        </div>
      </div>

      {/* Confirm Order Button */}
      <div className='my-3 flex justify-center items-center'>
        {!isLoading && (
          <button
            onClick={completeOrder}
            className='btn mt-[2rem] w-full md:w-1/2 rounded-full'
          >
            Оформить Заказ
          </button>
        )}

        {isLoading && (
          <button
            className='btn mt-[2rem] w-full md:w-1/2 rounded-full bg-gray-100'
            disabled={true}
          >
            Обработка заказа...
          </button>
        )}
      </div>
      <span className='block mt-6'>{message}</span>
    </div>
  )
}