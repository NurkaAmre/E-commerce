import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className="text-white flex justify-evenly font-castoro items-center py-10">
  
        <div className="text-white py-8">
          <h2 className='font-bold'>Режим работы call-центра</h2>
          <p>ежедневно с 11:00 до 00:00</p>
          <h2 className='font-bold'>Доставка заказов</h2>
          <p>ежедневно с 9:00 до 23:00</p>
        </div>
        
        <div>
          <h2 className='font-bold'>Follow Us:</h2>
          <ul className="flex justify-evenly">
            <Link href="https://www.facebook.com/" className="hover:text-gray-200 text-lg"><AiFillFacebook/></Link>
            <Link href="https://www.instagram.com/" className="hover:text-gray-200 text-lg"><AiFillInstagram/></Link>
            <Link href="https://www.twitter.com/" className="hover:text-gray-200 text-lg"><AiFillTwitterSquare/></Link>
          </ul>
        </div>
       
        <div className="text-white py-4">
          <h2 className='font-bold'>Контактная информация</h2>
          <Link href='call'>тел: +7707-717-91-28</Link>
          <p>Алматы, Аккент 56-66</p>
          <p>info@furniturewebsite.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
