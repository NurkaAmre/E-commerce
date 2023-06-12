'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBarMobile() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
  };
  return (
    <>
      <section className=" mobile-content bg-gray-400 items-center py-1 w-full z-20 fixed mt-[4rem]">
        <div className='flex rounded-full mx-[2rem] bg-slate-50 justify-center items-center'>
          <FiSearch className="text-gray-500 text-lg" />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Введите запрос"
              className="font-castoro rounded-full py-1 my-1 bg-slate-50 px-2 outline-none border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </section>
      
    </>
  )
}

export default SearchBarMobile;