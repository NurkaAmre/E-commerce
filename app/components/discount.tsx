import set1 from '@/public/set1.png'
import set2 from '@/public/set2.jpeg'
import set3 from '@/public/set5.jpeg'
import discount from '@/public/discount.png'
import mypat from '@/public/mypat.svg'
import Image from 'next/image'

export default function Discount (){
  return (
    <> 
    <section className='flex flex-wrap margin'>
      <div className="flex-1 order-0 discount-section">
        <h1 className='font-bold discount-heading text-2xl m-3 '>Find your</h1>
        <h3 className='font-medium font-castoro p-2 text-4xl'>Furniture</h3>
        <hr className="h-2 bg-gradient-to-r from-gray-300 to-transparent border-transparent w-2/3 mt-8"/>
        <h4 className='font-dancing_script font-medium text-6xl m-5'>New Collections</h4>
        <div className='bg-discount'>
          <span className='span1'>До</span>
          <span className='span2 underline'>20%</span>
        </div>
        <button className='btn-primary font-medium text-white px-4 mt-9 rounded-md py-3 w-1/2 text-lg'>Buy Now</button>
      </div>
      <div className="flex-1 order-0 pic-section">
        <div className='motion-images'>
          <Image src={set1} alt="set1" className='set1'/>
          <Image src={set3} alt="set1" className='set1'/>
        </div>
      </div>
    </section>
    
    </>
  )
}
