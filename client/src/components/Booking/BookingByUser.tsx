import { useParams } from 'react-router-dom'

export const BookingByUser = () => {
  const { id } = useParams()
  return <div>BookingByUser {id}</div>
}
