import pattern from '@/public/pattern.svg'
import pattern2 from '@/public/pattern2.svg'
import elipse1 from '@/public/Ellipsesm.png'
import elipse2 from '@/public/Ellipsesm1.png'
import elipsebig from '@/public/Ellipsebig.png'
import bed from '@/public/spalniy_gar1.jpeg'
import bed1 from '@/public/spalniy_gar2.jpeg'
import bed2 from '@/public/spalniy_gar4.jpeg'
import Image from 'next/image'

export default function Main (){
  return (
    <div className='main'>
    <Image src={pattern} alt="pattern" className='pattern'/>
    <hr className="h-4 hr bg-gradient-to-r from-gray-300 to-transparent border-transparent w-2/3"/>
    <div className='heading flex justify-center items-center text-center'>
      <h1 className='font-bold text-2xl text-center'>Modern</h1>
      <h3>Furniture</h3>
    </div>
     <hr className="h-4 hr1 bg-gradient-to-r from-transparent to-gray-300 border-transparent w-2/3"/>
    <div className='flex justify-center mt-4 relative'>
    <div className="img2 rounded-full "><Image className=' rounded-full' src={bed} alt='bed'/>
    <div className="img1 rounded-full "><Image className=' rounded-full' src={bed1} alt='bed'/></div>
    <div className="img3 rounded-full "><Image className=' rounded-full' src={bed2} alt='bed'/></div>
    </div>
    </div>
     <Image src={pattern2} alt="pattern2" className='pattern2'/>
    </div>
  )
}