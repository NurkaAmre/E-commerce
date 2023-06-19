import md5 from "md5"

export default function generateSig(URL: string, dataObject: any) {
  const secretKey = process.env.PAYBOX_SECRET_KEY as string
  let sig = Object.keys(dataObject)
    .sort()
    .filter((key) => key !== 'pg_sig')
    .map((key) => dataObject[key])
    .join(';')
  sig = md5(`${URL};${sig};${secretKey}`)
  return sig
}