import bedset from '@/public/bed-icon.png'
import chair from '@/public/chair-icon.png'
import sofa from '@/public/sofa.png'
import kitchen from '@/public/kitchen2.png'
import Image from "next/image"


export default function ProductSection() {
  return(
    <section className="grid grid-container grid-cols-fluid2 gap-12 mt-8">
    <div className="grid-item">
      <h3 className='icon-text font-medium font-castoro'>Kitchen Set</h3>
        <Image src={sofa} alt="bedset" className='icons' />
    </div>
    <div className="grid-item1">
       <h3 className='icon-text font-medium font-castoro'>Bed Set</h3>
        <Image src={bedset} alt="bedset" className='icons' />
    </div>
    <div className="grid-item1">
       <h3 className='icon-text font-medium font-castoro'>Chair</h3>
        <Image src={chair} alt="bedset" className='icons' />
    </div>
    <div className="grid-item">
       <h3 className='icon-text font-medium font-castoro'>Sofa</h3>
        <Image src={kitchen} alt="bedset" className='icons' />
    </div>
    </section>
  )
}