'use client'

import { useState } from 'react'

export default function UserInfo({ user }: any) {
  // Edit mode status for each card
  const [infoEditMode, setUserInfoEditMode] = useState(false)
  const [addressEditMode, setaddressEditMode] = useState(false)
  // User info data
  const [name, setName] = useState(user.name)
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
    <div className="flex flex-wrap w-full items-center gap-4 justify-center">
      {/* Info card */}
      <div className='flex flex-col bg-slate-400/25 p-4 w-[300px] rounded-lg'>
        <h3 className='text-center'>My Info</h3>
        <div>
          <span>Full Name: </span>
          {!infoEditMode ? <span>{user.name}</span> 
            : <input type="text" value={name} onChange={handleNameChange} />}
        </div>
        <div>
          <span>E-mail: </span>
          {!infoEditMode ? <span>{user.email}</span>
            : <input type="email" value={email} onChange={handleEmailChange} />}
        </div>
        <div>
          <span>Phone: </span>
          {!infoEditMode ? <span>{user.phone}</span>
            : <input type="tel" value={phone} onChange={handlePhoneChange} />}
        </div>
        <div>
          <button onClick={() => setUserInfoEditMode(true)} className='bg-slate-400/25 px-4 py-2 rounded-lg'>Edit</button>
          <button onClick={() => updateUserInfo()} className='bg-slate-400/25 px-4 py-2 rounded-lg'>Save</button>
        </div>
      </div>
      {/* Address card */}
      <div className='flex flex-col bg-slate-400/25 p-4 w-[300px] rounded-lg'>
        <h3 className='text-center'>My Address</h3>
        <div>
        <span>Address: </span>
        {!addressEditMode ? <span>{user.address?.address}</span> 
            : <input type="text" value={address} onChange={handleAddressChange} />}
        </div>
        <div>
          <span>City: </span>
          {!addressEditMode ? <span>{user.address?.city}</span> 
            : <input type="text" value={city} onChange={handleCityChange} />}
        </div>
        <div>
          <span>Province: </span>
          {!addressEditMode ? <span>{user.address?.province}</span> 
            : <input type="text" value={province} onChange={handleProvinceChange} />}
        </div>
        <div>
          <span>ZIP Code: </span>
          {!addressEditMode ? <span>{user.address?.zip}</span> 
            : <input type="text" value={zip} onChange={handleZipChange} />}
        </div>
        <div>  
          <button onClick={() => setaddressEditMode(true)} className='bg-slate-400/25 px-4 py-2 rounded-lg'>Edit</button>
          <button onClick={() => updateUserAddress()} className='bg-slate-400/25 px-4 py-2 rounded-lg'>Save</button>
        </div>
      </div>
    </div>
  )
}