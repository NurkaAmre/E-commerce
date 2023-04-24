'use client'
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { userCartStore } from "@/store"
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Checkout() {
  const cartStore = userCartStore()
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState('')
  useEffect(() => {
    //create a paymentIntent as soon as the page loads up
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    }).then((res) => {
      console.log(res)
      if(res.status === 403){
        return router.push('/api/auth/signin')
      }
      //Set client secret and the payment intent associated with it
      return res.json()
    }).then((data) => {
      // console.log(data)
      setClientSecret(data.paymentIntent.client_secret)
      cartStore.setPaymentIntent(data.paymentIntent.is)
    })
  }, [])

  return(
    <div>
      <h1>Checkout</h1>
    </div>
  )
}
