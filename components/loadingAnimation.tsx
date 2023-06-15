'use client'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import loading from '@/public/furni.json'

export default function LoadingAnimation() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ delay: 2 }}>
        <Player autoplay loop src={loading} className='player'></Player>
      </motion.div>
    </div>
  )
}