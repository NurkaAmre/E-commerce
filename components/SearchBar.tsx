'use client'

import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import SanityClient from '@/sanity/client';

function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // async function searchProducts(query) {
  //   try {
  //     const response = await SanityClient.fetch(
  //       `*[_type == "product" && title match $query]{
  //       _id,
  //       name,
  //       price,
  //       quantity,
  //       details,
  //       type,
  //       description,
  //       discount,
  //       slug,
  //       "imagesURL": images[].asset -> url
  //     }`,
  //       {
  //         query: query
  //       }
  //     );
  //     // Do something with the search results
  //     console.log(response);
  //   } catch (error) {
  //     // Handle error
  //     console.error(error);
  //   }
  // }

  // const handleSearch = () => {
  //   searchProducts(searchQuery);
  // };


  return (
    <>
      <div className="flex rounded-full desktop-content search-box px-2 items-center bg-slate-50">
        <FiSearch className="text-gray-600 text-lg" />
          <input
            type="text"
            placeholder="Введите запрос"
          className="font-castoro rounded-full py-2 bg-slate-50 px-2 outline-none border-0 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
    </>
  );
}

export default SearchBar; 