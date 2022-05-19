import { FaVk as VKIcon, FaTelegram as TelegramIcon } from 'react-icons/fa'

import styles from './Footer.module.scss'

const Footer = () => (
  <footer>
    <div className={styles.contacts}>
      <span>+7 (423) 240-40-88</span>
      <span>ROMAN.KOVBAS@VVSU.RU</span>
      <span>+7 (423) 240-40-88</span>
      <span>ROMAN.KOVBAS@VVSU.RU</span>
    </div>
    <div className={styles.share}>
      Поделиться
      <VKIcon /> <TelegramIcon />
    </div>
  </footer>
)

export default Footer
