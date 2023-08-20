import { createContext, useEffect, useState } from 'react'
import request from '@/utils/request'

interface Component {
  children: JSX.Element
}
export const UserContext = createContext({})

export interface UserContextValue {
  user: string | null
  setUser: (user: string | null) => void
  ready: boolean
}

function UserContextProvider({ children }: Component) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    console.log('user context',user);
     
    if (!user) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      request.get('/profile').then(({ username }: any) => {
        setUser(username)
        setReady(true)
      })
    }
  }, [])
  return <UserContext.Provider value={{ user, setUser, ready }}>{children}</UserContext.Provider>
}

export default UserContextProvider
