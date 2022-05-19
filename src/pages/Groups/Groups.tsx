import React from 'react'

import Loader from 'components/Loader'
import Searchbar from 'components/Searchbar'

import { getGroups } from 'api/services/groups'

import IGroup from 'interfaces/Group.interface'

import styles from './Groups.module.scss'

const Groups = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [groups, getGroups] = React.useState<IGroup[]>([])

  // React.useEffect(() => {
  //   const fetchStatic = async () => {
  //     setGroups((await getNews()).data)
  //   }

  //   fetchStatic().finally(() => setIsLoading(false))
  // }, [])

  const Card = (props: IGroup) => <article>{props.name}</article>

  return (
    <div className="content">
      <section className={styles.container}>
        <Searchbar placeholder="Поиск..." />
        {isLoading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          'text'
        )}
      </section>
    </div>
  )
}

export default Groups
