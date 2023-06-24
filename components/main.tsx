
import Image from 'next/image'
import sofa from '@/public/set1.png'

export default function MainSection (){
  return (
    <>
      <div className="grid grid-cols-1 w-4/5 mx-auto font-[cormorant] mt-[180px] sm:mt-[150px] md:grid-cols-2">
        <div className="flex flex-col items-center text-center py-12 bg-[#788A74]">
          <div className='heading'>
            <h2 ><span className='highLight text-7xl'>М</span>ебельный магазин</h2>
            <h2><span className='highLight text-7xl'>И</span>нтерьер</h2>
          </div>
          <p className='headingsm md:mt-9'>
            Приобретая и расставляя в своей гостиной нашу стильную мебель, вы сможете преобразить пространство вокруг себя и создать идеальную обстановку, где каждая деталь отражает ваш неповторимый вкус и представляет собой истинное воплощение элегантности и качества. Наша коллекция включает в себя обширный выбор изысканных диванов, которые с легкостью сочетают в себе роскошь и практичность, а также удобные кресла, обладающие безупречным дизайном и непревзойденным уровнем комфорта. 
          </p>
        </div>

        <div className="bg-[#d2c6b1] py-[100px] p-4 md:h-auto flex items-center">
          <Image className='m-auto' src={sofa} alt='sofa' width={600} height={600} />
        </div>
      </div>
    </>
  )
}