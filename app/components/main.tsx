import pattern from '@/public/pattern.png'
import pattern2 from '@/public/pattern2.png'
import bed from '@/public/spalniy_gar1.jpeg'
import bed1 from '@/public/spalniy_gar2.jpeg'
import bed2 from '@/public/spalniy_gar4.jpeg'
import Image from 'next/image'

export default function MainSection (){
  return (
    <>
    <div className='main min-h-screen flex justify-center flex-col align-middle text-center'>
    <Image src={pattern} alt="pattern" className='pattern'/>
    <hr className="h-4 hr bg-gradient-to-r from-gray-300 to-transparent border-transparent w-2/3"/>
    <div className='flex justify-center items-center text-center'>
      <h1 className='font-bold text-2xl heading '>Modern</h1>
      <h3 className='font-medium headingsm font-castoro'>Furniture</h3>
    </div>
     <hr className="h-4 hr1 bg-gradient-to-r from-transparent to-gray-300 border-transparent w-2/3"/>
    <div className='flex justify-center mt-10 relative'>
    <div className="img2 rounded-full "><Image className=' rounded-full' src={bed} alt='bed'/>
    <div className="img1 rounded-full "><Image className=' rounded-full' src={bed1} alt='bed'/></div>
    <div className="img3 rounded-full "><Image className=' rounded-full' src={bed2} alt='bed'/></div>
    </div>
    </div>
    <div className='flex justify-center m-8'>
      <button className='btn-primary font-medium text-white px-4 text-lg text-center rounded-md py-3 w-1/4'>Order</button>
    </div>
     {/* <Image src={pattern2} alt="pattern2" className='pattern2'/> */}
    </div>

   
    </>
  )
}