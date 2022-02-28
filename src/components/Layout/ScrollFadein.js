import { motion } from 'framer-motion'

export default function ScrollFadein({children}) {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration:0.6}}
        variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1}
        }}
    >
        {children}
      </motion.div>
  )
}
