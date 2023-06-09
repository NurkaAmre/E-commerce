'use client'

import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <>
      <div className="flex rounded-full search-box px-2 items-center bg-slate-50">
        <FiSearch className="text-gray-600 text-lg" />
          <input
            type="text"
            placeholder="Введите запрос"
          className="font-castoro rounded-full py-2 bg-slate-50 px-2 outline-none border-0 w-full"
          />
      </div>

      <FiSearch 
        className="hidden xsm absolute top-20 text-gray-600 text-lg"
        onClick={(e) => {
          e.stopPropagation();
          setShowSearchBar(!showSearchBar);
        }}
      />  
      {showSearchBar && (
        <div 
          className='fixed top-0 left-0 right-0 bottom-0'
          onClick={() => setShowSearchBar(false)}
        >
          <input
            type="text"
            placeholder="Введите запрос"
            onClick={(e) => e.stopPropagation()}
            className="font-castoro rounded-full py-2 bg-slate-50 px-2 relative left-1/2 transform -translate-x-1/2 top-20 outline-none border-0 z-50"
          />
        </div>
      )}   
    </>
  );
}

export default SearchBar; 