import classNames from 'classnames'

import NavMenu from 'components/NavMenu'

import { useSidebar } from 'hooks/useSidebar'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const { sidebarOpen } = useSidebar()

  return (
    <aside className={classNames(styles.container, { [styles.open]: sidebarOpen })}>
      <NavMenu />
    </aside>
  )
}

export default Sidebar
