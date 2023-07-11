export default function extractPhoneNumber(phoneNumber: string) {
  return parseInt(phoneNumber.replace(/[ \+\(\)-]/g,''))
}