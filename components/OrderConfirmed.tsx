import {motion} from 'framer-motion'
import Image from 'next/image'
import dance from '@/public/dance.gif'
import Link from 'next/link'

export default function OrderConfirmed() {
    return(
      <motion.div 
        className='flex items-center justify-center my-12'
        initial={{scale: 0.5, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
      >
        <div className='p-12 rounded-md text-center'>
          <h1 className='text-xl font-medium'>Your order has been placed </h1>
          <h2 className='text-sm my-4'>Check your email for the receipt</h2>
          <Image src={dance} width={300} height={300} className='py-8' alt='dance'/>
          <div className='flex items-center justify-center gap-12'>
          <Link className='font-medium' href={'/account/orders'}>
            Check your Order
          </Link>
        </div>
        </div>  
      </motion.div>
    )
}