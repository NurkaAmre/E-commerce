import Link from 'next/link';
import Image from 'next/image'
import SanityClient from '@/sanity/client';
import discountPrice from '@/util/discountPrice';

export default async function Discount (){
  const query = `*[_type == "product" && defined(discount)]
                {
                  _id,
                  name,
                  price,
                  stock,
                  details,
                  type,
                  description,
                  discount,
                  slug,
                  "imagesURL": images[].asset->url
                }[0...20]`;
  const products = await SanityClient.fetch(query);
  
  return (
    <> 
      <section className='discount-section'>
        <h1 className='text-3xl md:text-4xl font-roboto font-medium text-green-950-700 opacity-50 ml-[2rem] md:ml-[10rem]'>Товары со скидкой</h1>
        <hr className='my-2 h-3 mb-[1rem] text-gray-900 mx-[2rem] md:mx-[10rem]' />
        <div className="marquee">
          <div className='justify-center relative ml-10 maylike-products-container track flex flex-row gap-4'>
            {products.map((product: any) => (
              <>
                <div className='flex flex-col'>
                  <Link href={`/product/${product.slug.current}`}  className='relative h-[350px] w-[200px]'>
                    <div className="discount1 absolute right-4 top-4">
                      <p className="pl-1 pt-2">-{product.discount}%</p>
                    </div>
                    <Image 
                      className='rounded-md object-cover h-[250px] w-[200px]'
                      src={product.imagesURL[1]} 
                      width={200}
                      height={250} 
                      alt={product.name} />
                    <div className='flex flex-row bottom-[2rem] absolute bg-slate-500 bg-opacity-50 w-full rounded-md gap-8 py-3 justify-center'>
                      <h1 className='text-start font-castoro text-xl text-white'>{product.name}</h1>
                      <h3 className='text-white '>{discountPrice(product.price, product.discount)}&#x20B8;</h3>
                    </div>
                  </Link>
                </div>
              </>
            ))}

          </div>
        </div>

    </section>
    
    </>
  )
}
