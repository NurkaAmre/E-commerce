import SanityClient from "@/sanity/client"
import generateSig from "@/util/generateSig"
import { NextResponse } from "next/server"
import xml2js from 'xml2js'

export async function POST(request: Request) {
  // Extract formData from request
  const paymentFormData = await request.formData()

  // Convert formData to JS object
  const paymentData = {} as any
  for (const [key, value] of paymentFormData.entries()) {
    paymentData[key] = value
  }

  // Check request signature
  if (paymentData.pg_sig !== generateSig('payment', paymentData)) 
    return NextResponse.json({ message: 'Error' })
  
  // Check payment status
  if (paymentData.pg_result === '1') {
    // Update payment status in Sanity (Success)
    await SanityClient.patch(paymentData.pg_order_id as any).set({
      status: 'success',
      paymentId: paymentData.pg_payment_id,
    }).commit()

    // Prepare & return response
    const response = {
      pg_status: 'ok',
      pg_description: 'Payment allowed',
      pg_salt: 'salt',
    }
    const sig = generateSig('', response)
    const signedResponse = {
      response: {...response, pg_sig: sig},
    }
    const builder = new xml2js.Builder()
    const xmlResponse = builder.buildObject(signedResponse)
    return new Response(xmlResponse, {status: 200})
  } else {
    // Update payment status in Sanity (Failed)
    await SanityClient.patch(paymentData.pg_order_id as any).set({
      status: 'failed',
      paymentId: paymentData.pg_payment_id,
    }).commit()

    // Prepare & return response
    const response = {
      pg_status: 'rejected',
      pg_description: 'Payment cancelled',
      pg_salt: 'salt',
    }
    const sig = generateSig('', response)
    const signedResponse = {
      response: {...response, pg_sig: sig},
    }
    const builder = new xml2js.Builder()
    const xmlResponse = builder.buildObject(signedResponse)
    return new Response(xmlResponse, {status: 200})
  }
}