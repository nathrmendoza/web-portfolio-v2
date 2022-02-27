
import {motion, AnimatePresence} from 'framer-motion'
import {FaRegCheckCircle} from 'react-icons/fa';

export default function FormPopup({isVisible}) {
    
  return (
      <AnimatePresence>
          {isVisible && (
            <motion.div 
            id="form-popup"
            key="formp"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
              <div className='fpop-wrapper'>
                  <FaRegCheckCircle/>
                  <h2>Success</h2>
                  <p>We'll be in touch with you shortly.</p>
              </div>
            </motion.div>
          )}
        
      </AnimatePresence>
  )
}
