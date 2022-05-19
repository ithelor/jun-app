import React from 'react'

import Loader from 'components/Loader'
import Searchbar from 'components/Searchbar/Searchbar'

import { getNews } from 'api/services/news'

import INews from 'interfaces/News.interface'

import styles from './News.module.scss'

const News = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [news, setNews] = React.useState<INews[]>([])

  // React.useEffect(() => {
  //   const fetchStatic = async () => {
  //     setNews((await getNews()).data)
  //   }

  //   fetchStatic().finally(() => setIsLoading(false))
  // }, [])

  const NewsItem = (props: INews) => <div className={styles.newsItem}>{props.pic}</div>

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

export default News
