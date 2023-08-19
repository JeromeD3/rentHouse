import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import request from '@/utils/request'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await request.post('/register', {
        username,
        email,
        password,
      })
      console.log(res)
    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text" placeholder="Jerome" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="你的邮箱@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="你的密码" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            已经有账号了？
            <Link to="/login" className="underline text-black">
              现在登录
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
