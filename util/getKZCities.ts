import cities from '@/public/kz_cities.json'

export default function getKZCities() {
  const filteredCities = cities.map((cityObj: any) => {
    const { city } = cityObj;
    return city;
  })
  return filteredCities;
}