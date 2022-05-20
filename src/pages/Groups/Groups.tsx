import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaObjectGroup as DefaultIcon } from 'react-icons/fa'

import Loader from 'components/Loader'
import Searchbar from 'components/Searchbar'

import { getAll } from 'api/groups/groups.service'

import IGroup from 'interfaces/Group.interface'

import styles from './Groups.module.scss'

const Groups = () => {
  const navigate = useNavigate()

  const [groups, newGroups] = React.useState<IGroup[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchStatic = async () => {
      newGroups((await getAll()).data)
    }

    fetchStatic().finally(() => setIsLoading(false))
  }, [])

  const Group = (props: IGroup) => (
    <li>
      <span className={styles.upper}>
        <DefaultIcon />
        <h4>{props.name}</h4>
      </span>

      <p>{props.desc}</p>

      <span className={styles.controls}>
        <button onClick={() => navigate('placeholder')}>Подробнее</button>
        <button onClick={() => navigate('placeholder')}>Подать заявку</button>
      </span>
    </li>
  )

  return (
    <div className="content">
      <section className={styles.container}>
        <Searchbar placeholder="Поиск..." />
        {isLoading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <ul>
            {groups.map((item, index) => (
              <Group key={index} desc={item.desc} name={item.name} url={item.url} />
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Groups
