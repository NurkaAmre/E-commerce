import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <nav className="text-white">
         <div>
          <form className="flex justify-center align-middle text-center p-5 gap-14">
             <p className='font-medium font-castoro text-xl pr-5 pt-2'>Подписаться на рассылку:</p>
            <label htmlFor="email" className="sr-only">Email:</label>
            <input type="email" name="email" id="email" className="bg-white border-2 w-1/5 border-gray-400 rounded-lg py-2 px-4 mr-2" placeholder="Enter your email" />
            <button type="submit" className="btn-primary font-medium text-white px-4 text-lg text-center rounded-md py-3 w-1/7">Subscribe</button>
          </form>
        </div>
      </nav>
      <div className="text-white flex justify-evenly items-center py-4">
        <div>
          <h2 className='font-bold'>Follow Us:</h2>
          <ul className="flex justify-evenly">
            <Link href="https://www.facebook.com/" className="hover:text-gray-200 text-lg"><AiFillFacebook/></Link>
            <Link href="https://www.instagram.com/" className="hover:text-gray-200 text-lg"><AiFillInstagram/></Link>
            <Link href="https://www.twitter.com/" className="hover:text-gray-200 text-lg"><AiFillTwitterSquare/></Link>
          </ul>
        </div>
         <div className="text-white py-4">
          <h2 className='font-bold'>Режим работы call-центра</h2>
          <p>ежедневно с 11:00 до 00:00</p>
          <h2 className='font-bold'>Доставка заказов</h2>
          <p>ежедневно с 9:00 до 23:00</p>
          </div>
       
        <div className="text-white py-4">
          <h2 className='font-bold'>Контактная информация</h2>
          <Link href='call'>+7707-717-91-28</Link>
          <p>Алматы, Аккент 56-66</p>
          <p>info@furniturewebsite.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
