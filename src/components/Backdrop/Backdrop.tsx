import { motion } from 'framer-motion'
import styles from './Backdrop.module.scss'

interface IBackdrop {
  onClick: () => void
  children: React.ReactNode
}

const Backdrop = (props: IBackdrop) => {
  return (
    <motion.div
      onClick={props.onClick}
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  )
}

export default Backdrop
