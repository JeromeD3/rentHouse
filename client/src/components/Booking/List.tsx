/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Nav } from '../Account/Nav'
import request from '@/utils/request'
import { Img } from '../Place/Img'
import Money from '@/assets/money.svg'
import { Link } from 'react-router-dom'
import { Data } from './Data'
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
            <Link to={`/account/bookings/${booking._id}`} key={booking._id} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden mt-4">
              <div className="w-48">
                <Img place={booking.place} />
              </div>
              <div className="py-3 grow pr-3">
                <h2 className="text-xl">{booking.place.title}</h2>

                <div className="text-xl">
                  <Data booking={booking} className="mt-4 mb-2 text-gray-500" />
                  <div className="flex gap-1 items-center">
                    <Money />
                    <span className="text-2xl">总价：{booking.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No bookings</div>
        )}
      </div>
    </div>
  )
}
