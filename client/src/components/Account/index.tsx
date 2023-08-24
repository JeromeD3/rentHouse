import { UserContext, UserContextValue } from '@/context/user'
import { useContext, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import request from '@/utils/request'
import { Place } from '../Place/PlaceByUser'
import { Nav } from './Nav'

export const Account = () => {
  const { user, ready, setUser } = useContext(UserContext) as UserContextValue

  const [redirect, setRedirect] = useState('')
  let { subpage } = useParams()
  if (subpage === undefined) {
    subpage = 'profile'
  }

  if (!ready) return <div>loading...</div>
  if (ready && !user && !redirect) return <Navigate to="/login" />

  async function logout() {
    await request.post('/logout')
    setRedirect('/')
    setUser(null)
  }

  if (redirect) return <Navigate to={redirect} />
  return (
    <div>
      <Nav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && <Place />}
    </div>
  )
}
