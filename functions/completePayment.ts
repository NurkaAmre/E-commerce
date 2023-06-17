'use server'

import md5 from 'md5'
import xml2js from 'xml2js'

export default async function completePayment(order: OrderType, user: UserType) {
  const secretKey = 'xbiXRN7i69LFWK8x'
  const merchantId = '550159'
  const paymentData = {
    pg_order_id: order.id,
    pg_merchant_id: merchantId,
    pg_amount: order.amount,
    pg_currency: 'KZT',
    pg_salt: 'salt',
    pg_description: 'Description',
    pg_user_phone: user.phone,
    pg_user_contact_email: user.email
  } as any

  // Generate signature key
  let sig = Object.keys(paymentData)
    .sort()
    .map((key) => paymentData[key])
    .join(';')
  sig = md5(`init_payment.php;${sig};${secretKey}`)
  paymentData.pg_sig = sig

  // Create request body from payment data
  const body = new FormData()
  Object.keys(paymentData).forEach((key) => {
    body.append(key, paymentData[key])
  })

  // Send request
  const pgResponse = await fetch('https://api.paybox.money/init_payment.php', {
    method: 'POST',
    body: body,
  })
  const result = await pgResponse.text()
  const parser = new xml2js.Parser()
  const { response } = await parser.parseStringPromise(result)
  return response
}