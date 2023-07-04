import Image from "next/image"
import delivery from "@/public/delivery.gif"
import Link from "next/link"

export default function DeliveryServices() {
  return(
    <section className="w-4/5 mx-auto mb-20 flex flex-col md:flex-row">
      <div className="bg-[#d2c6b1a7] md:w-1/2 py-10 text-center">
        <div>
          <h1 className="font-bold  text-gray-800 opacity-50 text-4xl md:text-5xl ">Доставка и Услуги</h1>
          {/* <h2 className="font-bold text-4xl text-gray-800 md:text-5xl leading-6 opacity-50 ">Услуги</h2> */}
        </div>
        <div className="mt-3">
          <h3 className="font-medium font font-[castoro] text-2xl">Все просто!</h3>
          <h3 className="font-medium font font-[castoro] text-2xl">Все хлопоты по доставке</h3>
          <h3 className="font-medium font font-[castoro] text-2xl">Мы берем на себя</h3>
        </div>
        <div>
          <p className="font-[lobster] font1 text-lg m-5 px-8">
            Доставка по городу – БЕСПЛАТНО. Доставка в другие города Казахстана и Алматинской области – цена зависит от вашего местоположения и оговаривается индивидуально.</p>
          <Link href={"/delivery"}>
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