import React from 'react'
import {motion} from 'framer-motion'

const ToolItem = ({tdelay, children}) => {
  return (
      <motion.div
        className='tools-item'
        initial={{opacity: 0, y: -15}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: tdelay}}>
            <div className='item-wrap'>
                {children}
            </div>
      </motion.div>
  )
}

export default ToolItem