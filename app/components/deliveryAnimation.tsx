import {motion} from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import delivery from '@/public/delivery.json'

export default function DeliveryAnimation() {
  return (
    <div className='flex items-center justify-center flex-col mt-24 p-12'>
      <motion.h1 
      initial={{opacity: 0, y: 10}} 
      animate={{opacity: 1, y:0}} 
      transition={{delay: 0.5}}>
        Sending track
      </motion.h1>
      <Player autoplay loop src={delivery}></Player>
    </div>
  )
}