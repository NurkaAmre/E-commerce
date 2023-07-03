export default function getDeliveryFee(city: string) {
  console.log(city);
  
  switch (city) {
    case 'Almaty':
      return 20000
    default:
      return 0
  } 
}