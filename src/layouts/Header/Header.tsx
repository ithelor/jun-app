import React from 'react'
import { MdMenu as MenuIcon } from 'react-icons/md'

import Logo from 'components/Logo'
import NavMenu from 'components/NavMenu'
import FancyButton from 'components/FancyButton'
import ThemeSwitcher from 'components/ThemeSwitcher'

import { useSidebar } from 'hooks/useSidebar'
import { ModalContext } from 'contexts/ModalContext'
import { UserContext } from 'contexts/UserContext'
import { logout } from 'api/auth/auth.service'

import styles from './Header.module.scss'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()
  const { isModalOpen, setIsModalOpen } = React.useContext(ModalContext)

  const { user, setUser } = React.useContext(UserContext)

  return (
    <header className={styles.container}>
      <button className={styles.sidebarToggler} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <MenuIcon />
      </button>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.hideOnMobile}>
        <NavMenu />
        <ThemeSwitcher />
        {user ? (
          <FancyButton
            title="Выйти"
            onClick={() => {
              logout()
              setUser(null)
            }}
          />
        ) : (
          <FancyButton title="Авторизация" onClick={() => setIsModalOpen(!isModalOpen)} />
        )}
      </div>
    </header>
  )
}

export default Header
