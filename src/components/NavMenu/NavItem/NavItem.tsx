import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { MdInfo as DefaultIcon } from 'react-icons/md'

import styles from '../NavMenu.module.scss'

interface INavItem {
  title: string
  to: string
  icon?: React.ReactElement
}

const NavItem = (props: INavItem) => {
  return (
    <NavLink
      to={props.to}
      className={(nav) =>
        classNames(styles.navlink, {
          [styles.active]: nav.isActive
        })
      }
    >
      {props.icon ?? <DefaultIcon />}
      <h3>
        <span>{props.title}</span>
      </h3>
    </NavLink>
  )
}

export default NavItem
