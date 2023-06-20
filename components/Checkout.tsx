'use client'

import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { userCartStore } from '@/store';
import updateUserData from '@/functions/updateUserData'
import discountPrice from '@/util/discountPrice';
import createOrder from '@/functions/createOrder';
import completePayment from '@/functions/completePayment';
import { useRouter } from 'next/navigation';

export default function Checkout({ user }: { user: UserType }) {
  const cartStore = userCartStore()
  const router = useRouter()
  // Total Price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + (discountPrice(item.price, item.discount) * (item.quantity as any))
  }, 0)

  const [message, setMessage] = useState('')

  // Edit mode status
  const [editMode, setEditMode] = useState(false)

  // Order status
  const [isLoading, setIsLoading] = useState(false)

  // Shipping Information
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [street, setStreet] = useState(user.address?.street)
  const [city, setCity] = useState(user.address?.city)
  const [zip, setZip] = useState(user.address?.zip)

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
  const handleCityChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }
  const handleZipChange = (e: React.FormEvent<HTMLInputElement>) => {
    setZip(e.currentTarget.value)
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
        const createOrderResponse = await createOrder(cartStore.cart, totalPrice , userData)

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
              <Image className='rounded-md h-24' src={item.imagesURL[0]} alt={item.name} width={120} height={120}/>
              <div>
                <h2 className='font-[dancing_script]'>{item.name}</h2>
                <div className='flex gap-2'>
                  <h2 className='font-[lobster]'>Количество:{item.quantity} </h2>
                  <h2>{item.quantity}</h2>
                </div>
                <p className=''>{discountPrice(item.price, item.discount)} <span className='text-teal-400'>KZT</span></p>
              </div>
            </motion.div>
          ))}
          <p className='font-bold text-gray-600 mt-6'>Сумма к оплате: {totalPrice}<span className='text-teal-400'>KZT</span></p>
        </div>
      </div>

      {/* Shipping Information */}
      <h2 className='my-4 font-[lobster] text-2xl mb-4 text-gray-400'>Информация о доставке</h2>
      <hr />
      <div className='flex flex-col gap-4 justify-center relative'>
        <AiFillEdit className='absolute cursor-pointer text-[#8CCCC1]  right-0 top-0 text-2xl' onClick={() => setEditMode(true)} />
        <div className='flex flex-col text-gray-500'>
          <label className='head-little'>Имя<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-xs font-roboto'>{name}</span>
            : <input className='user-input text-xs font-roboto' type="text" value={name} onChange={handleNameChange} />}
        </div>
        <div className='flex flex-col text-gray-500'>
          <label className='head-little'>Тел<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-xs font-roboto'>{user.phone}</span>
            : <input className='user-input text-xs font-roboto' type="tel" value={phone} onChange={handlePhoneChange} />}
        </div>
        <div className='flex flex-col text-gray-500'>
          <label className='head-little'>Адрес доставки<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-xs font-roboto'>{user.address?.street}</span>
            : <input className='user-input text-xs font-roboto' type="text" value={street} onChange={handleStreetChange} />}
        </div>
        <div className='flex flex-col text-gray-500'>
          <label className='head-little'>Город<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-xs font-roboto'>{user.address?.city}</span>
            : <input className='user-input text-xs font-roboto' type="text" value={city} onChange={handleCityChange} />}
        </div>
        <div className='flex flex-col text-gray-500'>
          <label className='head-little'>Индекс<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-xs font-roboto'>{user.address?.zip}</span>
            : <input className='user-input text-xs font-roboto' type="text" value={zip} onChange={handleZipChange} />}
        </div>
        <div>
          <label className='text-base text-gray-700'>
            Срок доставки
            <span className='text-red-600'>*</span>
            <input
              type="date"
              name="deliveryDate"
              className='mx-6 text-teal-400 rounded-lg py-2 px-3'
            />
          </label>
        </div>

        <div className='flex justify-around'>
          <div>
            <label className='text-base text-gray-700'>
              Вне города
              <input
                type="checkbox"
                name="outsideCity"
                className='mx-2 text-teal-300'
              />
            </label>
          </div>

          <div>
            <label className='text-base text-gray-700'>
              Требуется сборка
              <input
                type="checkbox"
                name="requireConstruction"
                className='mx-2 text-teal-300 rounded-full'
              />
            </label>
          </div> 
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
          <button className='btn mt-[2rem] w-full md:w-1/2 rounded-full bg-gray-100' disabled={true}>
            Обработка заказа...
          </button>
        )}
      </div>
      <span className='block mt-6'>{message}</span>
    </div>
  )
}