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
    <div>
    <Image src={pattern} alt="pattern"/>
    <hr className="h-4 bg-gradient-to-r from-gray-300 to-transparent border-transparent w-1/2"/>
    <div className='flex justify-center flex-row text-lg'>
      <h1>Modern</h1>
      <h3>Furniture</h3>
    </div>
     <hr className="h-4 bg-gradient-to-r from-transparent to-gray-300 border-transparent w-1/2"/>
    <div className='flex justify-center relative'>
    <div className="img1 rounded-full "><Image className=' rounded-full' src={bed1} alt='bed'/></div>
    <div className="img2 rounded-full "><Image className=' rounded-full' src={bed} alt='bed'/></div>
    <div className="img1 rounded-full "><Image className=' rounded-full' src={bed2} alt='bed'/></div>
    </div>
     <Image src={pattern2} alt="pattern2" />
    </div>
  )
}