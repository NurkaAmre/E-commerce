import cities from '@/public/kz_cities.json'

export default function getKZCities() {
  const filteredCities = cities.map((cityObj: any) => {
    const { city } = cityObj;
    return city;
  })
  return filteredCities;
  // return [
  //   {engName: 'Almaty', rusName: 'Алматы'},
  //   {engName: 'Astana', rusName: 'Астана'},
  //   {engName: 'Shymkent', rusName: 'Шымкент'},
  //   {engName: 'Aktau', rusName: 'Актау'},
  //   {engName: 'Aktobe', rusName: 'Актобе'},
  //   {engName: 'Atyrau', rusName: 'Атырау'},
  //   {engName: 'Karaganda', rusName: 'Караганда'},
  //   {engName: 'Kokshetau', rusName: 'Кокшетау'},
  //   {engName: 'Kostanay', coderusName: 'Костанай'},
  //   {engName: 'Kyzylorda', rusName: 'Кызылорда'},
  //   {engName: 'Pavlodar', rusName: 'Павлодар'},
  //   {engName: 'Petropavl', rusName: 'Петропавловск'},
  //   {engName: 'Semey', rusName: 'Семей'},
  //   {engName: 'Taldykorgan', rusName: 'Талдыкорган'},
  //   {engName: 'Taraz', rusName: 'Тараз'},
  //   {engName: 'Oral', rusName: 'Уральск'},
  //   {engName: 'Oskemen', rusName: 'Усть-Каменогорск'},
  //   {engName: 'Shymkent', rusName: 'Шымкент'},
  //   {engName: 'Jezkazgan', rusName: 'Жезказган'},
  //   {engName: 'Taraz', rusName: 'Тараз'},
  // ]
}