
import { motion } from 'framer-motion'

const defaultVariants = {
    hidden: {
        opacity: 0,
        filter: 'blur(5px)'
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        filter: 'blur(5px)'
    }
}

const Layout = ({children, pagename}) => {
    return (
        <main className={'page-' + pagename}>
            <motion.div
                variants={defaultVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {children}
            </motion.div>
        </main>
    )
}

export default Layout