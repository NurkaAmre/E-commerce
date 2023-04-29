import set1 from '@/public/set1.png'
import set2 from '@/public/set2.jpeg'
import set3 from '@/public/set5.jpeg'
import discount from '@/public/discount.png'
import mypat from '@/public/mypat.svg'
import Image from 'next/image'

export default function Chain (){
  return (
    <> 
    <section className='flex flex-wrap margin'>
      <div className="flex-1 order-0  h-64">
        <h1>Find your</h1>
        <h2>Furniture</h2>
        <hr/>
        <h4 className='font-dancing_script font-medium '>New Collections</h4>
        <div>
          <Image src={discount} alt='discount'/>
          <span>Upto</span>
          <span>20%</span>
          <span>OFF</span>
        </div>
        <button className='btn-primary'>Buy Now</button>
      </div>
      <div className="flex-1 order-0 pic-section">
        <div className='motion-images'>
          <Image src={set1} alt="set1" className='set1'/>
         
        </div>
      </div>
    </section>
    
    </>
  )
}
