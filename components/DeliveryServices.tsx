import Image from "next/image"
import delivery from "@/public/delivery.gif"
import Link from "next/link"

export default function DeliveryServices() {
  return(
    <section className="w-4/5 mx-auto my-20 flex flex-col md:flex-row">
      <div className="bg-[#d2c6b1a7] md:w-1/2 py-10 text-center">
        <div>
          <h1 className="font-bold  text-gray-800 opacity-50 text-4xl md:text-6xl ">Доставка</h1>
          <h2 className="font-bold text-4xl text-gray-800 md:text-6xl leading-6 opacity-50 ">Услуги</h2>
        </div>
        <div className="m-6">
          <h3 className="font-medium font font-castoro text-2xl"> Мы упрощаем</h3>
          <h3 className="font-medium font font-castoro text-2xl"> Все  </h3>
          <h3 className="font-medium font font-castoro text-2xl"> Для вас  </h3>
        </div>
        <div>
          <h1 className="font-lobster font-medium font1 text-xl m-5">Быстро и Безопасно</h1>
          <Link href={"/deliveryPolicy"}>
            <button className=" font-medium text-white px-4 text-lg text-center  rounded-full btn py-3">Подробнее</button>
          </Link>
        </div>
      </div>

     <div className="md:w-1/2">
      <Image src={delivery} alt="delivery-track"/>
     </div>
    </section>
    )
}