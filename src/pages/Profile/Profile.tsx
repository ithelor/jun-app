import React from 'react'
import { FaUserAlt as UserIcon } from 'react-icons/fa'

import Tabs from 'components/Tabs'

import { UserContext } from 'contexts/UserContext'

// import IUser from 'interfaces/User.interface'

import styles from './Profile.module.scss'

const Profile = () => {
  const { user, setUser } = React.useContext(UserContext)

  return (
    <div className="content">
      <section className={styles.container}>
        <span className={styles.user}>
          <UserIcon />
          {user ? user.userDto.name : 'Юзернэйм'}
        </span>
        <Tabs />
      </section>
    </div>
  )
}

export default Profile
