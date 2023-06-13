'use client'

import { useTransition } from 'react'
import updateUserData from '@/functions/updateUserData'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

export default function UserInfo({ user }: any) {
  let [isPending, startTransition] = useTransition();
  // Edit mode status for each card
  const [contactInfoEditMode, setContactInfoEditMode] = useState(false)
  const [addressEditMode, setAddressEditMode] = useState(false)

  // User info data
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)

  // User address data
  const [street, setStreet] = useState(user.address?.street)
  const [city, setCity] = useState(user.address?.city)
  const [zip, setZip] = useState(user.address?.zip)

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
    <section className="flex flex-col items-center justify-center">
      <div className='flex flex-wrap gap-6 justify-center'>

        {/* Personal info */}
        <div className='flex flex-col relative w-[250px]'>
          <h3 className='text-2xl font-castoro font-bold text-left  text-gray-600 my-4'>Личные данные</h3>
          <div className='flex flex-col my-3 text-gray-700'>
            <label className='text-sm'>Имя<span className='text-red-600'>*</span> </label>
            <span className='user-input'>{name}</span>
          </div>
        </div>

        {/* Contact info */}
        <div className='flex flex-col relative w-[250px]'>
          <h3 className='text-2xl my-4 font-castoro font-bold text-gray-600'>Контакты</h3>
          <AiFillEdit className='absolute cursor-pointer text-[#8CCCC1]  right-0 top-5 text-2xl' onClick={() => setContactInfoEditMode(true)} />
          <div className='flex flex-col my-3  text-gray-700'>
            <label className='text-sm'>Тел<span className='text-red-600'>*</span> </label>
            {!contactInfoEditMode ? <span className='user-input'>{user.phone}</span>
              : <input className='user-input' type="tel" value={phone} onChange={handlePhoneChange} />}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>E-mail<span className='text-red-600'>*</span> </label>
            {!contactInfoEditMode ? <span className='user-input'>{user.email}</span>
              : <input className='user-input' type="email" value={email} onChange={handleEmailChange} />}
          </div>
        </div>

        {/* Address info */}
        <div className='flex flex-col relative w-[250px]'>
          <h2 className='text-2xl my-4 font-castoro font-bold text-gray-600 '>Адрес</h2>
          <AiFillEdit className='absolute cursor-pointer text-[#8CCCC1]  right-0 top-5 text-2xl' onClick={() => setAddressEditMode(true)} />
          <div className='flex flex-col my-3'>
            <label className='text-sm'>Адрес доставки<span className='text-red-600'>*</span> </label>
            {!addressEditMode ? <span className='user-input'>{user.address?.street}</span>
              : <input className='user-input' type="text" value={street} onChange={handleStreetChange} />}
          </div>
          <div className='flex flex-col my-3 text-gray-700'>
            <label className='text-sm'>Город<span className='text-red-600'>*</span> </label>
            {!addressEditMode ? <span className='user-input'>{user.address?.city}</span>
              : <input className='user-input' type="text" value={city} onChange={handleCityChange} />}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>Индекс<span className='text-red-600'>*</span> </label>
            {!addressEditMode ? <span className='user-input'>{user.address?.zip}</span>
              : <input className='user-input' type="text" value={zip} onChange={handleZipChange} />}
          </div>

        </div>
      </div>
      <div className='my-3'>
        <button 
          onClick={() => startTransition(() => {
            updateUserData(userData)
          })} 
          className='btn min-w-full rounded-full'
        >
          Сохранить
        </button>
      </div>
    </section >
  )
}