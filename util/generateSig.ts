import md5 from "md5"

export default function generateSig(dataObject: any) {
  const secretKey = 'xbiXRN7i69LFWK8x'
  let sig = Object.keys(dataObject)
    .sort()
    .map((key) => dataObject[key])
    .join(';')
  sig = md5(`init_payment.php;${sig};${secretKey}`)
  return sig
}