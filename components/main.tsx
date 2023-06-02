
import Image from 'next/image'
import sofa from '@/public/set1.png'

export default function MainSection (){
  return (
    <>
      <div className="grid grid-cols-2 main font-cormorant ">
        <div className="main-section-left">
          <div className='heading'>
            <h2 ><span className='highLight text-7xl'>М</span>ебельный магазин</h2>
            <h2><span className='highLight text-7xl'>И</span>нтерьер</h2>
          </div>
          <p className='headingsm'>
            Обустройте свою гостиную с нашей стильной мебелью. Изысканные диваны, удобные кресла и функциональные столики создадут атмосферу уюта и комфорта.
          </p>
          <button className='btn-primary btn align-middle font-medium text-white mt-6 rounded-full py-3 w-1/2 mr-10'>Заказать</button>
        </div>
        <div className="main-section-right p-4">
          <Image src={sofa} alt='sofa' className='absolute top-3rem left-4rem' width={800} height={600} />
        </div>

      </div>

    </>
  )
}