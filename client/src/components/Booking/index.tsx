import { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = ({ place }: any) => {
  const [checkIn, setCheckIn] = useState<string>()
  const [checkOut, setCheckOut] = useState<string>()
  const [guests, setGuests] = useState(1)

  const [name, setName] = useState<string>()
  const [mobile, setMobile] = useState<string>()

  let numberOfNights = 0
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
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

        <div className="py-4 px-4 border-t">
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="py-4 px-4 border-t">
          <label htmlFor="">Mobile</label>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
      </div>

      <button className="primary mt-4">
        Book this place <br />
        <span>{numberOfNights * place.price}</span>
      </button>
    </div>
  )
}
export default Index
