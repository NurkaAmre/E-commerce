export default function getMinDeliveryDate(city: string) {
  // Current Date
  const currentDate = new Date()
  let deliveryPeriod = 1
  switch (city) {
    case 'Almatay':
      deliveryPeriod = 1
  } 

  const currentYear = currentDate.getFullYear()
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0")
  const currentDay = (currentDate.getDate() + deliveryPeriod).toString().padStart(2, "0")
    
  return `${currentYear}-${currentMonth}-${currentDay}`
}