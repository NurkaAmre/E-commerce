import Image from 'next/image'
import SanityClient from '@/sanity/client';

export default async function Discount (){
  const query = `*[_type == "product" && defined(discount)]
                {
                  _id,
                  name,
                  price,
                  quantity,
                  details,
                  type,
                  description,
                  discount,
                  "imagesURL": images[].asset->url
                }[0...20]`;
  const products = await SanityClient.fetch(query);
  
  return (
    <> 
      <section className='discount-section'>
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
        <div className="marquee">
          <div className='justify-center rounded-img relative ml-10 maylike-products-container track flex flex-col discount-img'>
            {products.map((product) => (
              <Image className='border-2 border-red-500 m-4' src={product.imagesURL[1]} width={200} height={200} alt='bed' />
            ))}

          </div>
        </div>

    </section>
    
    </>
  )
}
