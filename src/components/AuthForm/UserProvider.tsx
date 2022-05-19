import React from 'react'

import { UserContext } from 'contexts/UserContext'
import { getCurrentUser } from 'api/auth/auth.service'

import IUser from 'interfaces/User.interface'

interface ISidebarProvider {
  children: React.ReactElement | React.ReactElement[]
}

const UserProvider = (props: ISidebarProvider) => {
  const [user, setUser] = React.useState<IUser>()

  React.useEffect(() => {
    const fetchData = () => {
      setUser(JSON.parse(getCurrentUser()))

      console.log(JSON.parse(getCurrentUser()))
    }

    fetchData()
  }, [setUser])

  return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
}

export default UserProvider
