
import Image from 'next/image'
import sofa from '@/public/set1.png'

export default function MainSection (){
  return (
    <>
      <div className="grid grid-cols-1 w-4/5 mx-auto font-cormorant mt-[120px] md:grid-cols-2 md:max-w-[1000px]">
        <div className="flex flex-col items-center text-center py-12 bg-[#788A74]">
          <div className='heading'>
            <h2 ><span className='highLight text-7xl'>М</span>ебельный магазин</h2>
            <h2><span className='highLight text-7xl'>И</span>нтерьер</h2>
          </div>
          <p className='headingsm'>
            Обустройте свою гостиную с нашей стильной мебелью. Изысканные диваны, удобные кресла и функциональные столики создадут атмосферу уюта и комфорта.
          </p>
          <button className='btn-primary btn align-middle font-medium text-white mt-6 rounded-full py-3 w-1/2 mr-10'>Заказать</button>
        </div>

        <div className="bg-[#d2c6b1] py-[100px] p-4 md:h-auto flex items-center">
          <Image className='m-auto' src={sofa} alt='sofa' width={600} height={600} />
        </div>
      </div>
    </>
  )
}