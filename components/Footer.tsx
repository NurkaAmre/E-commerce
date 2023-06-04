import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className="text-white flex flex-col md:flex-row justify-evenly font-castoro items-center md:items-start py-20">
        <div className="text-white py-4 text-center">
          <h2 className='font-bold'>Режим работы call-центра</h2>
          <p>ежедневно с 11:00 до 00:00</p>
          <h2 className='font-bold'>Доставка заказов</h2>
          <p>ежедневно с 9:00 до 23:00</p>
        </div>
       
        <div className="text-white py-4 text-center">
          <h2 className='font-bold'>Контактная информация</h2>
          <p>тел: +7707-717-91-28</p>
          <p>Алматы, Аккент 56-66</p>
          <p>info@furniturewebsite.com</p>
        </div>

        <div className='py-4 text-center'>
          <h2 className='font-bold'>Follow Us:</h2>
          <ul className="flex justify-evenly gap-2">
            <Link href="https://www.facebook.com/" className="hover:text-gray-200 text-3xl"><AiFillFacebook/></Link>
            <Link href="https://www.instagram.com/" className="hover:text-gray-200 text-3xl"><AiFillInstagram/></Link>
            <Link href="https://www.twitter.com/" className="hover:text-gray-200 text-3xl"><AiFillTwitterSquare/></Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
