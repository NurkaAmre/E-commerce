'use client'
import Image from "next/image";
import DeliveryAnimation from "./deliveryAnimation";
import delivery from '@/public/deliverservice.png'


export default function DeliveryServices() {
  return(
    <section>
      <DeliveryAnimation />
     <Image src={delivery}  alt="delivery"/>
    </section>
    )
}