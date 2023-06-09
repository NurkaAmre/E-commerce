'use client'

import { FiPhoneCall } from 'react-icons/fi';
import { useState } from "react"
import Link from "next/link"

export default function CallButton () {
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const populatePhoneNumber = () => {
    setPhoneNumber("+_ (____)-__-__-__")
  }

  const handlePhoneNumberChange = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (phoneNumber.length > 0 && phoneNumber !== "+_ (____)-__-__-__") {
        const newValue = phoneNumber.replace(/\d(?![\s\S]*\d)/m, "_");
        setPhoneNumber(newValue);
      }
      return;
    }

    if (e.key.match(/[^\d]/)) {
      return;
    }

    if (phoneNumber.length !== 0 && phoneNumber === "+_ (____)-__-__-__") {
      const newValue = phoneNumber.replace("_", "7");
      setPhoneNumber(newValue);
    } else {
      const newValue = phoneNumber.replace("_", e.key);
      setPhoneNumber(newValue);
    }
    
  };
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Perform any necessary action with the phone number (e.g., send it to the server)
    // You can access the phone number value with the phoneNumber variable
    // Reset the phone number input
    setPhoneNumber("");
    setName("")
    // Close the popup window
    closePopup();
  };

  return (
    <>
    <button role="form" className="lg:flex ">
      <h3 className="hidden lg:block mr-4 mt-2 cursor-pointer whitespace-nowrap" onClick={openPopup}>Обратный Звонок</h3>
      <div className="phone-anim relative" onClick={openPopup}>
        <FiPhoneCall className="text-xl phone-icon text-white absolute top-[0.7rem] left-[0.5rem]" />
      </div>
    </button>

    {showPopup && (
      <div 
        className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-50"
        onClick={closePopup}
      >
        <div 
          className="bg-gray-950 bg-opacity-75 p-10 w-[350px] relative rounded-md"
          onClick={(e) => { e.stopPropagation() }}
        >
          <h2 className="text-2xl mb-4 font-lobster text-white">Заказать звонок</h2>
          <span className="absolute text-4xl text-white top-0 right-5 cursor-pointer" onClick={closePopup}>&times;</span>
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Имя"
              className="border hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent w-full border-gray-300 rounded-full p-2 mb-4"
            />
            <input
              type="tel"
              value={phoneNumber}
              onFocus={populatePhoneNumber}
              onKeyDown={handlePhoneNumberChange}
              placeholder="Телефон"
              className="border hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent w-full border-gray-300 rounded-full p-2 mb-4"
            />
            <div>
              <button
                type="submit"
                className="bg-blue-400 popup-btn w-full text-white font-light font-lobster rounded-full"
              >
                Перезвоните мне
              </button>
            </div>
            <div className="flex flex-row mt-7 justify-center gap-4">
              <FiPhoneCall className="text-xl phone-icon mt-1 text-[#8CCCC1] " />
              <Link href="tel:+77087179128" className=" text-center">
                <span className="text-white text-xl underline">+7 708 717 91 28</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )}
</>
    
  )
}