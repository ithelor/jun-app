import React from 'react'
import classNames from 'classnames'
import {
  FaCircle as CircleIcon,
  FaMailBulk as NewIcon,
  FaFireExtinguisher as AGIcon,
  FaBrain as HFIcon,
  FaQuestion as NahIcon
} from 'react-icons/fa'

import styles from './Tabs.module.scss'

const Tabs = () => {
  const [index, setIndex] = React.useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.pane}>
        <div
          className={classNames(styles.title, { [styles.active]: index === 0 })}
          onClick={() => {
            setIndex(0)
          }}
        >
          Уведомления
        </div>
        <div
          className={classNames(styles.title, { [styles.active]: index === 1 })}
          onClick={() => {
            setIndex(1)
          }}
        >
          Ваши объединения
        </div>
      </div>
      <div className={styles.content} hidden={index !== 0}>
        <span className={styles.record}>
          <CircleIcon style={{ fill: '#1f9c1f' }} />
          Запрос на вступление в группу принят
        </span>
        <span className={styles.record}>
          <CircleIcon style={{ fill: '#ca3b3b' }} />
          Запрос на вступление в группу отклонен
        </span>
        <span className={styles.record}>
          <NewIcon style={{ fill: '#e0c341' }} />
          Пароль был изменен
        </span>
      </div>
      <div className={styles.content} hidden={index !== 1}>
        <span className={styles.record}>
          <AGIcon />
          АННИГИЛЯТОРНАЯ ПУШКА
        </span>
        <span className={styles.record}>
          <HFIcon />
          Жесткий фейл
        </span>
        <span className={styles.record}>
          <NahIcon />
          Аничо
        </span>
      </div>
    </div>
  )
}

export default Tabs
