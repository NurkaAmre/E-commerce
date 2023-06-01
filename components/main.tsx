import bed from '@/public/spalniy_gar1.jpeg'
import bed1 from '@/public/spalniy_gar2.jpeg'
import bed2 from '@/public/spalniy_gar4.jpeg'
import Image from 'next/image'

export default function MainSection (){
  return (
    <>
      <div className="main min-h-screen flex justify-center flex-col align-middle text-center">

        <div className='flex justify-center items-center text-center mt-5'>
          <h1 className='font-bold text-2xl heading gradient-text'>Мебель <span>для</span> </h1>
          <h3 className='font-medium headingsm font-castoro mt-5 gradient-text'>вашего дома</h3>
    </div>
        <hr className="h-2 bg-gradient-to-r from-gray-300 to-transparent border-transparent w-2/4" />

    <div className='flex justify-center rounded-img relative mt-10'>
    <div className="img2 rounded-full "><Image className=' rounded-full' src={bed} alt='bed'/>
    <div className="img1 rounded-full "><Image className=' rounded-full' src={bed1} alt='bed'/></div>
    <div className="img3 rounded-full "><Image className=' rounded-full' src={bed2} alt='bed'/></div>
    </div>
    </div>
    <div className='flex justify-center m-8'>
          <button className='btn-primary btn font-medium text-white px-4 text-lg text-center m-5 rounded-full py-3 w-1/5'>Заказать</button>
    </div>
    </div>

   
    </>
  )
}