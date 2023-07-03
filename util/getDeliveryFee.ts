export default function getDeliveryFee(city: string) {
  switch (city) {
    case 'Almaty':
      return 20000
    default:
      return 0
  } 
}