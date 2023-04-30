import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
      <div className="search-box bg-gray-200 rounded-lg flex items-center px-4 w-1/3">
        <FiSearch className="text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-200 rounded-full py-2 px-8 outline-none border-0"
        />
      </div>
  );
}

export default SearchBar;