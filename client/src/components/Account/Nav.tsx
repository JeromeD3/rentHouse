import { Link, useLocation } from 'react-router-dom'
import User from '@/assets/user2.svg'
import List from '@/assets/list.svg'
import Building from '@/assets/building.svg'

export const Nav = () => {
  const { pathname } = useLocation()
  let subpage = pathname.split('/')?.[2]
  if (subpage === undefined) {
    subpage = 'profile'
  }
  console.log(subpage)
  function linkClasses(type: string = '') {
    let classes = 'inline-flex gap-2 px-4 py-2  rounded-full'

    if (type === subpage) {
      classes += ' bg-primary text-white'
    } else {
      classes += ' bg-gray-300'
    }
    return classes
  }
  return (
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
  )
}
