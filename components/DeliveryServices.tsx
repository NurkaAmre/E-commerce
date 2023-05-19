import Image from "next/image"
import delivery from "@/public/delivery.gif"

export default function DeliveryServices() {
  return(
    <section className="delivery flex justify-center align-middle">
      <div className="delivery-text flex-1 order-0  text-center">
        <div className="mt-10">
        <h1 className="font-bold delivery-heading text-2xl">Delivery</h1>
        <h2 className="font-bold delivery-heading text-2xl">Services</h2>
      </div>
      <div className="m-6">
        <h3 className="font-medium  font-castoro text-4xl"> We make </h3>
        <h3 className="font-medium font-castoro text-4xl"> Everyting </h3>
        <h3 className="font-medium font-castoro text-4xl"> More Easy </h3>
      </div>
      <div>
        <h1 className="font-dancing_script font-medium text-3xl m-5">Fast and Safe</h1>
        <button className="btn-primary font-medium text-white px-4 text-lg text-center m-5 rounded-full py-3 w-1/2">More details</button>
      </div>
      </div>
     <div className="flex-1 order-0">
      <Image src={delivery} alt="delivery-track"/>
     </div>
    </section>
    )
}