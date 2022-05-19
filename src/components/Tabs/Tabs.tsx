import classNames from 'classnames'
import React from 'react'
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
        Content1
      </div>
      <div className={styles.content} hidden={index !== 1}>
        Content2
      </div>
    </div>
  )
}

export default Tabs
