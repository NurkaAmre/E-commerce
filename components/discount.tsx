import bed from '@/public/spalniy_gar1.jpeg'
import bed1 from '@/public/spalniy_gar7.jpeg'
import bed2 from '@/public/spalniy_gar4.jpeg'
import Image from 'next/image'
import SanityClient from '@/sanity/client';

export default async function Discount (){
  const query = `*[_type == "product" && defined(discount)][0...20]`;
  const products = await SanityClient.fetch(query);
  console.log(products);
  
  return (
    <> 
      <section className='discount-section '>
        {/* <div className="flex-1 order-0 discount-section">
          <h1 className='font-bold discount-heading text-2xl m-3 '>Найдите свою</h1>
          <h3 className='font-medium font-castoro p-2 text-4xl'>Мебель</h3>
        <hr className="h-2 bg-gradient-to-r from-gray-300 to-transparent border-transparent w-2/3 mt-8"/>
          <h4 className='font-cormorant font-medium text-6xl m-5'>Новые коллекции</h4>
        <div className='bg-discount'>
          <span className='span1'>До</span>
          <span className='span2 underline'>20%</span>
        </div>
          <button className='btn-primary btn font-medium text-white px-4 mt-9 rounded-full py-3 text-lg w-1/2'>Купить</button>
        </div> */}
        <div className=" marquee">
          <div className='justify-center rounded-img relative ml-10 maylike-products-container track flex flex-col discount-img'>
            <div className="img2 image-container items-center rounded-full "><Image className=' rounded-full' src={bed} alt='bed' /></div>
            <div className="img1 image-container items-center rounded-full "><Image className=' rounded-full' src={bed1} alt='bed' /></div>
            <div className="img3 image-container items-center rounded-full "><Image className=' rounded-full' src={bed2} alt='bed' /></div>
          </div>
        </div>

    </section>
    
    </>
  )
}
