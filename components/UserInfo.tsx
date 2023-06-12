'use client'

import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

export default function UserInfo({ user }: any) {
  // Edit mode status for each card
  const [infoEditMode, setUserInfoEditMode] = useState(false)
  const [addressEditMode, setaddressEditMode] = useState(false)
  // User info data
  const [name, setName] = useState(user.name)
  const [surname, setSurname] = useState(user.surname)
  const [familyname, setFamilyname] = useState(user.familyname)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  // User address data
  const [address, setAddress] = useState(user.address?.address)
  const [city, setCity] = useState(user.address?.city)
  const [province, setProvince] = useState(user.address?.province)
  const [zip, setZip] = useState(user.address?.zip)
  // Change event handlers for user info
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const handleSurnameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSurname(e.currentTarget.value)
  }
  const handleFamilynameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFamilyname(e.currentTarget.value)
  }
  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handlePhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
  }
  // Change event handlers for user address
  const handleAddressChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }
  const handleCityChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }
  const handleProvinceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setProvince(e.currentTarget.value)
  }
  const handleZipChange = (e: React.FormEvent<HTMLInputElement>) => {
    setZip(e.currentTarget.value)
  }
  // Update user info
  const updateUserInfo = () => {
    // Update user info here
    setUserInfoEditMode(false)
  }
  // Update user address
  const updateUserAddress = () => {
    // Update user address here
    setaddressEditMode(false)
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <div className='flex flex-col md:flex-row md:gap-[6rem]'>
        <div className='flex flex-col  relative'>
          <AiFillEdit className='absolute text-[#8CCCC1] right-0 top-5 text-2xl' onClick={() => setUserInfoEditMode(true)} />
          <h3 className='text-2xl font-castoro font-bold text-left  text-gray-600 my-4'>Личные данные</h3>
          <div className='flex flex-col my-3 text-gray-700'>
            <label className='text-sm'>Имя<span className='text-red-600'>*</span> </label>
            <input className='user-input' type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>Фамилия<span className='text-red-600'>*</span> </label>
            {!infoEditMode ? <span className='user-input'>{user.surname}</span>
              : <input className='user-input' type="text" value={surname} onChange={handleSurnameChange} />}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>Отчество</label>
            {!infoEditMode ? <span className='user-input'>{user.familyname}</span>
              : <input className='user-input' type="text" value={familyname} onChange={handleFamilynameChange} />}
          </div>
        </div>
        <div className='flex flex-col relative'>
          <h3 className='text-2xl my-4 font-castoro font-bold text-gray-600'>Контакты</h3>
          <AiFillEdit className='absolute  text-[#8CCCC1]  right-0 top-5 text-2xl' onClick={() => setUserInfoEditMode(true)} />
          <div className='flex flex-col my-3  text-gray-700'>
            <label className='text-sm'>Тел<span className='text-red-600'>*</span> </label>
            {!infoEditMode ? <span className='user-input'>{user.phone}</span>
              : <input className='user-input' type="tel" value={phone} onChange={handlePhoneChange} />}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>E-mail<span className='text-red-600'>*</span> </label>
            {!infoEditMode ? <span className='user-input'>{user.email}</span>
              : <input className='user-input' type="email" value={email} onChange={handleEmailChange} />}
          </div>
        </div>
        <div className='flex flex-col relative '>
          <h2 className='text-2xl my-4 font-castoro font-bold text-gray-600 '>Адрес</h2>
          <AiFillEdit className='absolute  text-[#8CCCC1]  right-0 top-5 text-2xl' onClick={() => setUserInfoEditMode(true)} />
          <div className='flex flex-col my-3 text-gray-700'>
            <label className='text-sm'>Город<span className='text-red-600'>*</span> </label>
            {!addressEditMode ? <span className='user-input'>{user.address?.city}</span>
              : <input className='user-input' type="text" value={city} onChange={handleCityChange} />}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>Адрес доставки<span className='text-red-600'>*</span> </label>
            {!addressEditMode ? <span className='user-input'>{user.address?.address}</span>
              : <input className='user-input' type="text" value={address} onChange={handleAddressChange} />}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-sm'>Индекс<span className='text-red-600'>*</span> </label>
            {!addressEditMode ? <span className='user-input'>{user.address?.zip}</span>
              : <input className='user-input' type="text" value={zip} onChange={handleZipChange} />}
          </div>

        </div>
      </div>
      <div className='my-3'>
        <button onClick={() => updateUserInfo()} className='btn min-w-full rounded-full'>Сохранить</button>
      </div>
    </section >
  )
}