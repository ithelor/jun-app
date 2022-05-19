import { motion } from 'framer-motion'

import styles from './FancyButton.module.scss'

interface IFancyButton {
  title: string
  onClick: () => void
}

const FancyButton = (props: IFancyButton) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={styles.container}
    onClick={props.onClick}
  >
    {props.title}
  </motion.button>
)

export default FancyButton
