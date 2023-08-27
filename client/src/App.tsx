import { Routes, Route } from 'react-router-dom'
import Index from './components/index'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
import { Register } from './components/Register'
import { Account } from './components/Account'
import UserContextProvider from './context/user'
import { Place as PlaceByUser } from './components/Place/PlaceByUser'
import Place from './components/Place/index'

import { New } from './components/Place/New'
import { BookingByUser } from './components/Booking/BookingByUser'
import { List as BookingsList } from './components/Booking/List'

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/places" element={<PlaceByUser />} />
            <Route path="/account/places/new" element={<New />} />
            <Route path="/account/places/:id" element={<New />} />
            <Route path="/place/:id" element={<Place />}></Route>
            <Route path="/account/bookings" element={<BookingsList />} />
            <Route path="/account/bookings/:id" element={<BookingByUser />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
