import { useParams } from 'react-router-dom'

import { New } from './New'
import { Nav } from '../Account/Nav'
import { List } from './List'

export interface placeData {
  _id: number
  owner: string
  title: string
  address: string
  photos: string[]
  description: string
  perks: string[]
  extraInfo: string
  checkIn: string
  checkOut: string
  maxGuests: number
  price: number
}

export const Place = () => {
  const { action } = useParams()

  return (
    <div>
      <Nav />
      {action !== 'new' && <List />}
      {action === 'new' && <New />}
    </div>
  )
}
