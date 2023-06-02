import Image from "next/image"
import delivery from "@/public/delivery.gif"

export default function DeliveryServices() {
  return(
    <section className="delivery flex justify-center">
      <div className="delivery-text flex-1 order-0  text-center">
        <div className="mt-10">
          <h1 className="font-bold delivery-heading text-2xl">Доставка</h1>
          <h2 className="font-bold delivery-heading text-2xl">Услуги</h2>
        </div>
        <div className="m-6">
          <h3 className="font-medium font font-castoro text-2xl"> Мы упрощаем</h3>
          <h3 className="font-medium font font-castoro text-2xl"> Все  </h3>
          <h3 className="font-medium font font-castoro text-2xl"> Для вас  </h3>
      </div>
      <div>
          <h1 className="font-dancing_script font-medium font1 text-xl m-5">Быстро и Безопасно</h1>
          <button className=" font-medium text-white px-4 text-lg text-center  rounded-full btn py-3 w-1/3">Подробнее</button>
      </div>
      </div>
     <div className="flex-1 order-0">
      <Image src={delivery} alt="delivery-track"/>
     </div>
    </section>
    )
}