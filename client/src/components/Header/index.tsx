import Logo from '@/assets/logo.svg'
import Search from '../../assets/button/search.svg'
import Divider from '../Divider'
import Hamb from '@/assets/hamb.svg'
import User from '@/assets/user.svg'
import { Link } from 'react-router-dom'
import useStore from '@/store/user'
import { useEffect } from 'react'
import request from '@/utils/request'


const Index: React.FC = () => {
  const [user, setUser] = useStore((state) => [state.user, state.setUser])

  useEffect(() => {
    if (!user) console.log('user is null')
    request.get('/profile').then((res) => {
      
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setUser(res.username)
    })
  }, [user])
  return (
    <header className="flex justify-between">
      <a href="" className="flex items-center gap-1">
        <div className="w-10 h-10">
          <Logo />
        </div>
        <span className="font-bold text-xl">ikun 租房</span>
      </a>
      <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>地点</div>
        <Divider />
        <div>时间</div>
        <Divider />
        <div>人数</div>
        <button className="bg-primary text-white p-1 rounded-full ">
          <Search />
        </button>
      </div>
      <Link to={'/login'} className="flex gap-2 border border-gray-300 rounded-full py-2 px-4">
        <Hamb />
        <div className="bg-gray-500 text-white rounded-full border border-gray-500">
          <User />
        </div>
        {user ? <div className="text-gray-500">{user}</div> : <div className="text-gray-500">登录</div>}
      </Link>
    </header>
  )
}
export default Index
