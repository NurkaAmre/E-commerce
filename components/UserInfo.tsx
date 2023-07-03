'use client'

import updateUserData from '@/functions/updateUserData'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import getKZCities from '@/util/getKZCities'

export default function UserInfo({ user }: any) {

  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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
  const handleCityChange = (e: React.FormEvent<HTMLSelectElement>) => {
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
    <section className="">
      <div className='flex flex-wrap md:flex-row gap-10 justify-center md:justify-evenly'>

        {/* Personal info */}
        <div className='flex flex-col relative w-[250px]'>
          <h3 className='text-2xl font-[castoro] font-bold text-left  text-gray-600 my-4'>Личные данные</h3>
          <div className='flex flex-col my-3 text-gray-700'>
            <label className='text-sm'>
              Имя<span className='text-teal-400'>*</span>
            </label>
            <span className='user-input text-[10px] font-roboto'>
              {name}
            </span>
          </div>
        </div>

        {/* Contact info */}
        <div className='flex flex-col relative w-[250px]'>
          <h3 className='text-2xl my-4 font-[castoro] font-bold text-gray-600'>
            Контакты
          </h3>
          <AiFillEdit 
            className='absolute cursor-pointer text-[#8CCCC1] right-0 top-5 text-2xl'
            onClick={() => setContactInfoEditMode(true)}
          />
          <div className='flex flex-col my-3  text-gray-700'>
            <label className='head-little'>
              Тел<span className='text-teal-400'>*</span>
            </label>
            <input
              className='user-input text-xs font-roboto'
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              disabled={!contactInfoEditMode}
            />
          </div>
          <div className='flex flex-col my-3'>
            <label className='head-little'>
              E-mail<span className='text-teal-400'>*</span>
            </label>
            <input
              className='user-input text-xs font-roboto'
              type="email"
              value={email}
              onChange={handleEmailChange}
              disabled={!contactInfoEditMode}
            />
          </div>
        </div>

        {/* Address info */}
        <div className='flex flex-col relative w-[250px]'>
          <h2 className='text-2xl my-4 font-[castoro] font-bold text-gray-600'>
            Адрес
          </h2>
          <AiFillEdit 
            className='absolute cursor-pointer text-[#8CCCC1]  right-0 top-5 text-2xl'
            onClick={() => setAddressEditMode(true)} 
          />
          <div className='flex flex-col my-3'>
            <label className='head-little'>
              Адрес доставки<span className='text-teal-400'>*</span>
            </label>
            <input
              className='user-input text-xs font-roboto'
              type="text"
              value={street}
              onChange={handleStreetChange}
              disabled={!addressEditMode}
            />
          </div>
          <div className='flex flex-col my-3'>
            <label className='head-little'>
              Город<span className='text-teal-400'>*</span>
            </label>            
            <select
              className='user-input text-xs font-roboto'
              onChange={handleCityChange}
              disabled={!addressEditMode}
            >
              {getKZCities().map((cityName) => (
                <option
                  value={cityName}
                  selected={cityName === city ? true : false}
                >
                  {cityName}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col my-3'>
            <label className='head-little'>
              Индекс<span className='text-teal-400'>*</span>
            </label>
            <input
              className='user-input text-xs font-roboto'
              type="text"
              value={zip}
              onChange={handleZipChange}
              disabled={!addressEditMode}
            />
            </div>

        </div>
      </div>
      <div className='my-3 flex justify-center items-center'>
        {!isLoading && (
          <button 
            onClick={async () => {
              // Set loading status
              setIsLoading(true)
              const response = await updateUserData(userData)
              setIsLoading(false)
              setMessage(response.message)
            }} 
            className='btn mt-[2rem] w-full md:w-1/2 rounded-full'
          >
            Сохранить
          </button>
        )}
        
        {isLoading && (
          <button
            className='btn mt-[2rem] w-full md:w-1/2 rounded-full'
            disabled={true}
          >
            обновление...
          </button>
        )}
      </div>
      <span className='block mt-6'>{message}</span>
    </section >
  )
}