import { FaPlus as AddPictureIcon } from 'react-icons/fa'

import styles from './GroupCreate.module.scss'

const GroupCreate = () => (
  <div className="content">
    <section className={styles.container}>
      <h3 className={styles.title}>Создание объединения</h3>
      <div className={styles.row}>
        <div className={styles.addPicture}>
          Иконка <AddPictureIcon />
        </div>
        <input type="text" placeholder="Имя" />
      </div>
    </section>
  </div>
)

export default GroupCreate
