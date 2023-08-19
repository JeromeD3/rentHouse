import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './components/index'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
import { Register } from './components/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
