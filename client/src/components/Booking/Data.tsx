/* eslint-disable @typescript-eslint/no-explicit-any */
import { differenceInCalendarDays, format } from 'date-fns'
import Calendar from '@/assets/calendar.svg'
import Night from '@/assets/night.svg'

export const Data = ({ booking, className }: any) => {
  return (
    <>
      <div className={'flex gap-1 items-center' + className}>
        <Night />
        一共 {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} 天
        <div className="flex gap-1 items-center ml-2">
          <Calendar />
          {format(new Date(booking.checkIn), 'yyyy-MM-dd')} &rarr;
        </div>
        <div className="flex gap-1 items-center ">
          <Calendar />
          {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
        </div>
      </div>

    </>
  )
}
