import SanityClient from "@/sanity/client"
import generateSig from "@/util/generateSig"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  console.log('Payment callback');
  
  const paymentFormData = await request.formData()
  // const paymentStatus = paymentFormData.get('pg_result')
  // const paymentOrderId = paymentFormData.get('pg_order_id')
  // const paymentId = paymentFormData.get('pg_payment_id')
  // const paymentSig = paymentFormData.get('pg_sig')

  const paymentData = {} as any
  for (const [key, value] of paymentFormData.entries()) {
    paymentData[key] = value
  }

  let text = '';
  for (const [key, value] of Object.entries(paymentData)) {
    text += `${key}: ${value}\n`
  }

  await SanityClient.patch('00675708-865c-4187-88dd-de3bce751590').set({
    text: text
  }).commit()

  if (paymentData.pg_sig !== generateSig(paymentData)) 
    return NextResponse.json({ message: 'Error' })
  
  if (paymentData.pg_result === '1') {
    console.log('Payment success')
    await SanityClient.patch(paymentData.pg_order_id as any).set({
      status: 'success',
      paymentId: paymentData.pg_payment_id,
    }).commit()
  } else {
    console.log('Payment failed')
    await SanityClient.patch(paymentData.pg_order_id as any).set({
      status: 'failed',
      paymentId: paymentData.pg_payment_id,
    }).commit()
  }
  return NextResponse.json({ message: 'Hello world!' })
}