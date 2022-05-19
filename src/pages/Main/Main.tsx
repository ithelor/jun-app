import { AnimatePresence, motion } from 'framer-motion'

import Modal from 'components/Modal'
import fancyStyles from 'components/FancyButton/FancyButton.module.scss'

import useModal from 'hooks/useModal'

import styles from './Main.module.scss'

const Main = () => {
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <main>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {isModalOpen && <Modal text="text" handleClose={closeModal} />}
      </AnimatePresence>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={fancyStyles.container}
          onClick={() => (isModalOpen ? closeModal() : openModal())}
        >
          Авторизация
        </motion.button>
      </div>
      <section className={styles.about} />
      <section className={styles.path} />
      <section className={styles.dance} />
      <section className={styles.youth} />
    </main>
  )
}

export default Main
