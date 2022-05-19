import { motion } from 'framer-motion'
import useModal from 'hooks/useModal'

import styles from './FancyButton.module.scss'

const FancyButton = () => {
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
      onClick={() => (isModalOpen ? closeModal() : openModal())}
    >
      Авторизация
    </motion.button>
  )
}

export default FancyButton
