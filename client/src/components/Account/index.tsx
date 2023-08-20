import { UserContext, UserContextValue } from '@/context/user'
import { useContext, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import request from '@/utils/request'
import { Place } from '../Place'
import User from '@/assets/user2.svg'
import List from '@/assets/list.svg'
import Building from '@/assets/building.svg'

export const Account = () => {
  const { user, ready, setUser } = useContext(UserContext) as UserContextValue

  const [redirect, setRedirect] = useState('')
  let { subpage } = useParams()
  if (subpage === undefined) {
    subpage = 'profile'
  }

  if (!ready) return <div>loading...</div>
  if (ready && !user && !redirect) return <Navigate to="/login" />

  function linkClasses(type: string = '') {
    let classes = 'inline-flex gap-2 px-4 py-2  rounded-full'

    if (type === subpage) {
      classes += ' bg-primary text-white'
    } else {
      classes += ' bg-gray-300'
    }
    return classes
  }

  async function logout() {
    await request.post('/logout')
    setRedirect('/')
    setUser(null)
  }

  if (redirect) return <Navigate to={redirect} />
  return (
    <div>
      <nav className="flex w-full mt-8 mb-8 gap-4 justify-center">
        <Link className={linkClasses('profile')} to={'/account'}>
          <User />
          个人中心
        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          <List />
          我的预定
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
          <Building />
          我的房子
        </Link>
      </nav>
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
