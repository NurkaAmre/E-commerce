import pattern from '@/public/pattern.svg'
import pattern2 from '@/public/pattern2.svg'
import Image from 'next/image'

export default function Main (){
  return (
    <>
    <Image src={pattern} alt="pattern"/>
    <Image src={pattern2} alt="pattern2" left={0}/>
    </>
  )
}