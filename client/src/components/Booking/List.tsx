/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Nav } from '../Account/Nav'
import request from '@/utils/request'

export const List = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    request.get('/bookings').then((res: any) => {
      console.log(res)
      setBookings(res)
    })
  }, [])

  return (
    <div>
      <Nav />
      <div>
        {bookings?.length > 0 ? (
          bookings.map((booking: any) => (
            <div key={booking._id}>
              {booking.checkIn} - {booking.checkOut}
            </div>
          ))
        ) : (
          <div>No bookings</div>
        )}
      </div>
    </div>
  )
}
