import { MdMenu as MenuIcon } from 'react-icons/md'

import Logo from 'components/Logo'
import NavMenu from 'components/NavMenu'
import LoginButton from 'components/FancyButton'
import ThemeSwitcher from 'components/ThemeSwitcher'

import styles from './Header.module.scss'
import { useSidebar } from 'hooks/useSidebar'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

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
        <LoginButton />
      </div>
    </header>
  )
}

export default Header
