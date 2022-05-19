import Tabs from 'components/Tabs'
import { FaUserAlt as UserIcon } from 'react-icons/fa'

import styles from './Profile.module.scss'

const Profile = () => (
  <div className="content">
    <section className={styles.container}>
      <span>
        <UserIcon />
        Юзернэйм
      </span>
      <Tabs />
    </section>
  </div>
)

export default Profile
