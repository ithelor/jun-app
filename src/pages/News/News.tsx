import React from 'react'
import { FaStickyNote as DefaultIcon } from 'react-icons/fa'

import Loader from 'components/Loader'
import Searchbar from 'components/Searchbar/Searchbar'

import INews from 'interfaces/News.interface'

import styles from './News.module.scss'
import { getAll } from 'api/news/news.service'
import { useNavigate } from 'react-router-dom'

const News = () => {
  const navigate = useNavigate()

  const [news, setNews] = React.useState<INews[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchStatic = async () => {
      setNews((await getAll()).data)
    }

    fetchStatic().finally(() => setIsLoading(false))
  }, [])

  const handleClick = (path: string) => {
    console.log(path)
    navigate(path)
  }

  const NewsItem = (props: INews) => (
    <li>
      {props.pic ?? <DefaultIcon />}
      <div className={styles.content}>
        <span className={styles.upper}>
          <h4>{props.title}</h4>
          <span>{props.date}</span>
        </span>
        <p>{props.text}</p>
        <button onClick={() => handleClick(props.link)}>Читать далее</button>
      </div>
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
            {news.map((item, index) => (
              <NewsItem
                key={index}
                date={item.date}
                link={item.link}
                pic={item.pic}
                text={item.text}
                title={item.title}
              />
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default News
