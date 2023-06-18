import md5 from "md5"

export default function generateSig(URL: string, dataObject: any) {
  const secretKey = 'xbiXRN7i69LFWK8x'
  let sig = Object.keys(dataObject)
    .sort()
    .map((key) => key !== 'pg_sig' ? dataObject[key] : undefined)
    .join(';')
  sig = md5(`${URL};${sig};${secretKey}`)
  return sig
}