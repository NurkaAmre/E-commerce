
import Image from 'next/image'
import sofa from '@/public/set1.png'

export default function MainSection (){
  return (
    <>
      <div className="grid grid-cols-2 main ">
        <div className="main-section-text p-4">
          <h2>Мебель в минималистическом стиле</h2>
          <p>
            Обустройте свою гостиную с нашей стильной мебелью. Изысканные диваны, удобные кресла и функциональные столики создадут атмосферу уюта и комфорта.
          </p>
        </div>
        <div className="main-section p-4">Section 2</div>

      </div>

    </>
  )
}