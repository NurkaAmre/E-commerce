
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

    <div className='flex justify-center m-8'>
          <button className='btn-primary btn font-medium text-white px-4 text-lg text-center m-5 rounded-full py-3 w-1/5'>Заказать</button>
    </div>
    </div>

   
    </>
  )
}