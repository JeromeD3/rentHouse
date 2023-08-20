import { FormEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import request from '@/utils/request'
import { UserContext, UserContextValue } from '@/context/user'

interface loginRes {
  username: string
}
export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext) as UserContextValue
  async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    try {
      const res = (await request.post('/login', {
        username,
        password,
      })) as loginRes
      setUser(res.username)
      setRedirect(true)
    } catch (error) {
      console.error(error.config.data)
    }
  }

  useEffect(() => {
    if (redirect) {
      navigate('/')
    }
  }, [redirect])

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
          <input type="text" placeholder="你的名字" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="你的密码" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            还没有账号？
            <Link to="/register" className="underline text-black">
              现在注册
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
