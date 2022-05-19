import { motion } from 'framer-motion'

import Backdrop from 'components/Backdrop'

import styles from './Modal.module.scss'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

interface IModal {
  handleClose: () => void
  //   children: JSX.Element | JSX.Element[]
  text: string
}

const Modal = (props: IModal) => (
  <Backdrop onClick={props.handleClose}>
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={styles.container}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.text}

      <button onClick={props.handleClose}>Close</button>
    </motion.div>
  </Backdrop>
)

export default Modal
