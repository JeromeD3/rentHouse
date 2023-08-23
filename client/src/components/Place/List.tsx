import Plus from '@/assets/plus.svg'

import request from '@/utils/request'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { placeData } from '.'

export const List = () => {
  const [places, setPlaces] = useState<[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.get('/places').then((res: any) => {
      console.log(res)
      setPlaces(res)
    })
  }, [])

  return (
    <div className="text-center">
      list of all added places
      <br />
      <Link to={'/account/places/new'} className="bg-primary text-white py-2 px-6 rounded-full inline-flex gap-1">
        <Plus />
        Add new Place
      </Link>
      <div>
        {places.length > 0 &&
          places.map((place: placeData) => (
            <Link to={'/account/places/' + place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl" key={place._id}>
              <div className="w-32 h-32 bg-gray-300  shrink-0">
                {place.photos.length > 0 ? (
                  <img className="object-cover" src={`http://localhost:3000/uploads/${place.photos[0]}`} />
                ) : (
                  <div className="flex justify-center items-center h-full text-2xl text-gray-500">No photo</div>
                )}
              </div>

              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
