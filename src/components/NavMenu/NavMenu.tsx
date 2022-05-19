import React from 'react'
import {
  FaHome as MainIcon,
  FaNewspaper as NewsIcon,
  FaLayerGroup as UnionsIcon,
  FaUser as UserIcon
} from 'react-icons/fa'

import NavItem from './NavItem'

import { UserContext } from 'contexts/UserContext'

import styles from './NavMenu.module.scss'

const NavMenu = () => {
  const { user } = React.useContext(UserContext)

  return (
    <div className={styles.container}>
      <NavItem title="Главная" to="/" icon={<MainIcon />} />
      <NavItem title="Новости" to="news" icon={<NewsIcon />} />
      <NavItem title="Объединения" to="groups" icon={<UnionsIcon />} />
      {user && <NavItem title="Профиль" to="profile" icon={<UserIcon />} />}
    </div>
  )
}

export default NavMenu
