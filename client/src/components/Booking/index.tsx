/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import request from '@/utils/request'
import { Navigate } from 'react-router-dom'
import { UserContext } from '@/context/user'

const Index = ({ place }: any) => {
  const [checkIn, setCheckIn] = useState<string>('')
  const [checkOut, setCheckOut] = useState<string>('')
  const [guests, setGuests] = useState(1)

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const [redirect, setRedirect] = useState<string>('')

  const { user }: any = useContext(UserContext)

  useEffect(() => {
    if (user) {
      console.log(user)
      setName(user)
    }
  }, [user])

  let numberOfNights = 0
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
  }

  const bookThisPlace = async () => {
    const data = {
      checkIn,
      checkOut,
      numberOfNights,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
      user: place.owner,
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await request.post('bookings', data)
    console.log(res)

    const { _id } = res
    setRedirect(`/account/bookings/${_id}`)
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">Price: ${place.price} / per night</div>

      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-4 px-4">
            <label htmlFor="">Check-in</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="py-4 px-4 border-l">
            <label htmlFor="">Check-out</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>

        <div className="py-4 px-4 border-t">
          <label htmlFor="">Number of guests:</label>
          <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </div>


        {numberOfNights > 0 && (
          <div className="py-4 px-4 border-t">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="">phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        )}
      </div>

      <button className="primary mt-4" onClick={bookThisPlace}>
        Book this place <br />
        <span>{numberOfNights * place.price}</span>
      </button>
    </div>
  )
}
export default Index
