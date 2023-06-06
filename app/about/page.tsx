import React from 'react'
import { AiFillStar, AiOutlineStar, AiFillCustomerService, AiFillSafetyCertificate } from 'react-icons/ai';
import { FaUser, FaTruck, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import about from '@/public/about-1.jpg'


const AboutUs = () => {
  return (
    <section className='about-us mx-[2rem] md:mx-[6rem] sm:mx-[4rem]'>
      <div className='about-section'>
        <div className='flex-1 order-0 about-img'>
          <Image src={about} alt='about' className='mt-[6.5rem]' />
        </div>
        <div className='flex-1 order-0 about-text'>

          <h2 className="section-title">О нас</h2>
          <p className="section-description text-[0.5rem] md:text-[2rem] sm:text-[1rem] ">
            Добро пожаловать в нашу мебельную компанию! Мы лидирующий производитель и магазин мебели в Казахстане. У нас широкий выбор стильной и качественной мебели. Мы гордимся производством собственной мебели с использованием передовых технологий и высококачественных материалов. Наша цель - создавать функциональные и эстетически привлекательные предметы мебели, отражающие последние тенденции в дизайне интерьера. Мы также предлагаем мебель из Турции, известную своим элегантным и качественным дизайном. Наша команда профессионалов поможет вам выбрать идеальные решения для вашего дома или офиса. Мы ценим каждого клиента и предлагаем высокий уровень обслуживания. Спасибо за выбор нашей компании. Мы готовы предложить вам лучшую мебель и надежное обслуживание, чтобы помочь вам создать прекрасный и функциональный интерьер, который впечатлит вас и ваших гостей.
            <br /><br />
            С уважением,<br />
            Команда Интерьер
          </p>
        </div>
      </div>

      <h1 className="section-title text-center">Наши услуги</h1>
      <div className='gap-3 about-cards grid grid-cols-2 w-6/4 mx-auto md:grid-cols-2'>
        <div className="service-card">
          <AiFillCustomerService className='text-white text-6xl' />
          <h3 className="service-title">Профессиональное консультирование</h3>
          <p className="service-description">Наша команда экспертов всегда готова предоставить вам профессиональные консультации и рекомендации при выборе мебели. Мы поможем вам определиться с подходящими стилем, размером и дизайном, чтобы создать идеальное пространство в вашем доме или офисе.</p>
        </div>

        <div className="service-card1">
          <FaTruck className='text-white  text-5xl' />
          <h3 className="service-title">Доставка и установка</h3>
          <p className="service-description">Мы предлагаем удобные услуги доставки и установки мебели. Наша команда опытных специалистов позаботится о том, чтобы ваша мебель была доставлена вовремя и установлена с высоким качеством. Мы обеспечим профессиональный монтаж, чтобы вы могли сразу наслаждаться новой мебелью.</p>
        </div>
        <div className="service-card">
          <AiFillSafetyCertificate className='text-white  text-6xl' />
          <h3 className="service-title">Высокое качество</h3>
          <p className="service-description">Мы стремимся предлагать мебель, которая сочетает в себе превосходное качество материалов, тщательную обработку и непревзойденное мастерство изготовления. Доверьтесь нам, чтобы получить мебель, которая будет радовать вас своей прочностью, красотой и функциональностью на протяжении многих лет.</p>
        </div>
        <div className="service-card1">
          <FaUser className='text-white text-5xl' />
          <h3 className="service-title">Индивидуальный подход</h3>
          <p className="service-description">Мы понимаем, что каждый клиент уникален, и у нас гибкий подход к их потребностям. Наша команда консультантов готова обсудить ваши требования и предложить индивидуальные рекомендации, чтобы сделать ваш опыт покупки максимально удовлетворительным.</p>
        </div>
      </div>


      <h2 className="section-title text-center">Отзывы наших клиентов</h2>
      <div className='gap-3 about-cards grid grid-cols-2 w-6/4 mx-auto md:grid-cols-2'>
        <div className="testimonial-card">
          <FaUserCircle className='text-yellow-900 text-4xl' />
          <div>
            <p className="client-name">Name of Client</p>
            <div className="review-stars text-red-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className="testimonial-text">
            "Я был впечатлен качеством и обслуживанием, полученными от этой компании. Моя покупка была легкой и приятной, и моя новая мебель превзошла все мои ожидания."
          </p>
        </div>
        <div className="testimonial-card">
          <FaUserCircle className='text-yellow-900 text-4xl' />
          <div>
            <p className="client-name">Name of Client</p>
            <div className="review-stars text-red-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className="testimonial-text">
            "У них отличный выбор мебели, и цены очень разумные. Я был приятно удивлен качеством изделий, которые я приобрел. Буду обязательно обращаться к ним снова."
          </p>
        </div>
        <div className="testimonial-card">
          <FaUserCircle className='text-yellow-900 text-4xl' />
          <div>
            <p className="client-name">Name of Client</p>
            <div className="review-stars text-red-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className="testimonial-text">
            "Я уже несколько раз покупал мебель у этой компании, и каждый раз я получал отличный продукт и высокий уровень обслуживания. Рекомендую их всем, кто ищет качественную и стильную мебель."
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutUs;
