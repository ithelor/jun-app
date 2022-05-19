import React from 'react'
import { MdMenu as MenuIcon } from 'react-icons/md'

import Logo from 'components/Logo'
import NavMenu from 'components/NavMenu'
import FancyButton from 'components/FancyButton'
import ThemeSwitcher from 'components/ThemeSwitcher'

import { ModalContext } from 'contexts/ModalContext'
import { useSidebar } from 'hooks/useSidebar'

import styles from './Header.module.scss'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()
  const { isModalOpen, setIsModalOpen } = React.useContext(ModalContext)

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
        <FancyButton title="Авторизация" onClick={() => setIsModalOpen(!isModalOpen)} />
      </div>
    </header>
  )
}

export default Header
