/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '@/utils/request'
import { AddressLink } from '../Place/AddressLink'
import { Gallery } from '../Place/Gallery'
import { Data } from './Data'

export const BookingByUser = () => {
  const { id } = useParams()
  const [booking, setBooking] = useState<any>(null)
  useEffect(() => {
    if (id) {
      request.get('/bookings').then((res: any) => {
        const foundBooking = res.find(({ _id }: any) => _id === id)
        console.log('foundBooking', foundBooking)
        foundBooking && setBooking(foundBooking)
      })
    }
  }, [id])
  if (!booking) return ''
  return (
    <div>
      <div className="my-8">
        <h1 className="text-3xl">{booking.place.title}</h1>
        <AddressLink className="my-2 block">{booking.place.address}</AddressLink>

        <div className="bg-gray-200 flex p-4 my-6 rounded-2xl justify-between">
          <div>
            <h2 className="text-2xl mb-4">预订信息：</h2>
            <Data booking={booking} />
          </div>

          <div className='bg-primary p-6 text-white rounded-2xl'>
            <div>Total price</div>
            <div className='text-3xl'>{booking.price}</div>
          </div>
        </div>
        <Gallery place={booking.place} />
      </div>
    </div>
  )
}
