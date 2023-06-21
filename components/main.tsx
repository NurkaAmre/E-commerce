
import Image from 'next/image'
import sofa from '@/public/set1.png'

export default function MainSection (){
  return (
    <>
      <div className="grid grid-cols-1 w-4/5 mx-auto font-[cormorant] mt-[180px] md:grid-cols-2">
        <div className="flex flex-col items-center text-center pb-4 md:py-12 bg-[#788A74]">
          <div className='heading mt-8'>
            <h2 className='text-4xl md:text-6xl text-white leading-9'><span className='highLight text-5xl md:text-7xl'>М</span>ебельный магазин</h2>
            <h2 className='text-4xl text-white md:text-6xl leading-8'><span className='highLight  md:text-7xl text-5xl'>И</span>нтерьер</h2>
          </div>
          <p className='headingsm'>
            Обустройте свою гостиную с нашей стильной мебелью. Изысканные диваны, удобные кресла и функциональные столики создадут атмосферу уюта и комфорта.
          </p>
        </div>

        <div className="bg-[#d2c6b1] py-10 md:h-auto flex items-center">
          <Image className='m-auto' src={sofa} alt='sofa' width={600} height={600} />
        </div>
      </div>
    </>
  )
}