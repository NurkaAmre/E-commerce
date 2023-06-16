'use client'

import { useTransition, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { userCartStore } from '@/store';
import updateUserData from '@/functions/updateUserData'
import discountPrice from '@/util/discountPrice';

export default function Checkout({ user }: { user: UserType }) {
  const cartStore = userCartStore()
  //Total Price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + discountPrice(item.price, item.discount) * item.cartQuantity
  }, 0)

  let [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState('')

  // Edit mode status for each card
  const [editMode, setEditMode] = useState(false)

  // User info data
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)

  // User address data
  const [street, setStreet] = useState(user.address?.street)
  const [city, setCity] = useState(user.address?.city)
  const [zip, setZip] = useState(user.address?.zip)

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  // Event handlers for contact info
  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handlePhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
  }

  // Event handlers for user address
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
    phone,
    email,
    address: {
      id: user.address?.id,
      street,
      city,
      zip
    }
  }

  return (
    <div>
      <div>
        <h2>Order Products</h2>
        <div>
          {cartStore.cart.map((item) => (
            <motion.div layout key={item.id}
              className='flex p-4 gap-4 bg-base-100 my-4 rounded-lg'>
              <Image className='rounded-md h-24' src={item.imagesURL[0]} alt={item.name} width={120} height={120}/>
              <div>
                <h2>{item.name}</h2>
                <div className='flex gap-2'>
                  <h2>Количество: </h2>
                  <h2>{item.cartQuantity}</h2>
                </div>
                <p className='text-sm'>{discountPrice(item.price, item.discount)} KZT</p>
              </div>
            </motion.div>
          ))}
          <p className=''>Сумма к оплате: {totalPrice} KZT</p>
        </div>
      </div>
      <h2 className='my-4'>Shipping Information</h2>
      <div className='flex flex-col gap-4 justify-center relative'>
        <AiFillEdit className='absolute cursor-pointer text-[#8CCCC1]  right-0 top-0 text-2xl' onClick={() => setEditMode(true)} />
        {/* User info */}
        <div className='flex flex-col text-gray-700'>
          <label className='text-sm'>Имя<span className='text-red-600'>*</span> </label>
          
          {!editMode ? <span className='user-input text-base font-roboto'>{name}</span>
            : <input className='user-input text-base font-roboto' type="text" value={name} onChange={handleNameChange} />}
        </div>
        <div className='flex flex-col text-gray-700'>
          <label className='text-sm'>Тел<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-base font-roboto'>{user.phone}</span>
            : <input className='user-input text-base font-roboto' type="tel" value={phone} onChange={handlePhoneChange} />}
        </div>
        <div className='flex flex-col text-gray-700'>
          <label className='text-sm'>E-mail<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-base font-roboto'>{user.email}</span>
            : <input className='user-input text-base font-roboto' type="email" value={email} onChange={handleEmailChange} />}
        </div>
        <div className='flex flex-col'>
          <label className='text-sm'>Адрес доставки<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-base font-roboto'>{user.address?.street}</span>
            : <input className='user-input text-base font-roboto' type="text" value={street} onChange={handleStreetChange} />}
        </div>
        <div className='flex flex-col text-gray-700'>
          <label className='text-sm'>Город<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-base font-roboto'>{user.address?.city}</span>
            : <input className='user-input text-base font-roboto' type="text" value={city} onChange={handleCityChange} />}
        </div>
        <div className='flex flex-col'>
          <label className='text-sm'>Индекс<span className='text-red-600'>*</span> </label>
          {!editMode ? <span className='user-input text-base font-roboto'>{user.address?.zip}</span>
            : <input className='user-input text-base font-roboto' type="text" value={zip} onChange={handleZipChange} />}
        </div>
      </div>
      <div className='my-3 flex justify-center items-center'>
        <button 
          onClick={() => startTransition(async () => {
            const response = await updateUserData(userData)
            if (name && phone && email && street && city && zip) {
              if (response.code === 200) {
                console.log(response.data)
              } else {
                setMessage(response.message)
              }
            } else {
              setMessage('Please fill in all the fields')
            }
          })} 
          className='btn mt-[2rem] w-full md:w-1/2 rounded-full'
        >
          Confirm Order
        </button>
      </div>
      <span className='block mt-6'>{message}</span>
    </div>
  )
}