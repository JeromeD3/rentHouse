import request from '@/utils/request'
import { useEffect, useState } from 'react'
import { placeData } from './Place/PlaceByUser'
import { Link } from 'react-router-dom'
const Index = () => {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.get('/places').then((res: any) => {
      console.log(res)
      setPlaces(res)
    })
  }, [])

  return (
    <div className="mt-8 grid gap-8 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place: placeData) => (
          <Link to={'/place/' + place._id} key={place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] ? (
                <img className="rounded-2xl object-cover aspect-square" src={`http://localhost:3000/uploads/${place.photos?.[0]}`} alt="" />
              ) : (
                <div className="rounded-2xl object-cover aspect-square bg-gray-300">None</div>
              )}
            </div>

            <h3 className="font-bold">{place.address}</h3>
            <h3 className="text-sm truncate text-gray-500 ">{place.title}</h3>
            <div className="mt-1">{place.price + ' / 晚 • 免费取消'}</div>
          </Link>
        ))}
    </div>
  )
}
export default Index
