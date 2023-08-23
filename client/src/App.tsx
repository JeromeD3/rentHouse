import { Routes, Route } from 'react-router-dom'
import Index from './components/index'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
import { Register } from './components/Register'
import { Account } from './components/Account'
import UserContextProvider from './context/user'
import { Place } from './components/Place'
import { New } from './components/Place/New'
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />}></Route>
            <Route path="/account/places" element={<Place />}></Route>
            <Route path="/account/places/new" element={<New />}></Route>
            <Route path="/account/places/:id" element={<New />}></Route>

          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
