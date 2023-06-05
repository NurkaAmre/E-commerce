import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
    <div className=" search-box flex rounded-full px-2 items-center bg-slate-50">
      <FiSearch className="text-gray-600 text-lg" />
        <input
          type="text"
          placeholder="Введите запрос"
        className="font-castoro rounded-full py-2 bg-slate-50 px-2 outline-none border-0 w-full"
        />
      </div>
  );
}

export default SearchBar; 