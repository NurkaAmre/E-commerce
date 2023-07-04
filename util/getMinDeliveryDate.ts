export default function getMinDeliveryDate(city: string) {
  let deliveryPeriod = 10
  switch (city) {
    case 'Almaty':
      deliveryPeriod = 2
  } 
  // Current Date
  const currentDate = new Date();
  const minDeliveryDate = new Date();
  minDeliveryDate.setDate(currentDate.getDate() + deliveryPeriod);

  const minYear = minDeliveryDate.getFullYear()
  const minMonth = (minDeliveryDate.getMonth() + 1).toString().padStart(2, "0")
  const minDay = minDeliveryDate.getDate().toString().padStart(2, "0")
    
  return `${minYear}-${minMonth}-${minDay}`
}