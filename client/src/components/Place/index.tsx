import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '@/utils/request'
import Photo from '@/assets/photo.svg'
import Close from '@/assets/close.svg'
import Map from '@/assets/map.svg'
import Booking from '../Booking'

const Index = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [place, setPlace] = useState<any>(null)

  const [showAllPhotos, setShowAllPhotos] = useState(false)
  useEffect(() => {
    if (!id) return
    request.get(`/places/${id}`).then((res) => {
      console.log(res)
      setPlace(res)
    })
  }, [id])

  if (!place) return ''
  if (showAllPhotos)
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
            <button onClick={() => setShowAllPhotos(false)} className="bg-white text-black right-12 top-8 shadow shadow-gray-500 fixed flex gap-1 py-2 px-4 rounded-2xl ">
              <Close />
              关闭
            </button>
          </div>

          {place?.photos?.map((photo: string) => (
            <div>
              <img className="aspect-square object-cover" src={'http://localhost:3000/uploads/' + photo} alt="" />
            </div>
          ))}
        </div>
      </div>
    )
  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-2xl">{place?.title}</h1>

      <a target="_blank" className="flex gap-1 black my-3 font-semibold underline" href={`https://map.baidu.com/search/${place.address}`}>
        <Map />
        {place.address}
      </a>

      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          {/* left */}
          <div>
            {place.photos?.[0] && (
              <div>
                <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:3000/uploads/' + place.photos?.[0]} alt="" />
              </div>
            )}
          </div>

          {/* right */}
          <div className="grid">
            {place.photos?.[1] && <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:3000/uploads/' + place.photos?.[1]} alt="" />}
            <div className=" overflow-hidden">
              {place.photos?.[2] && <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative" src={'http://localhost:3000/uploads/' + place.photos?.[2]} alt="" />}
            </div>
          </div>
        </div>

        <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500">
          <Photo />
          获取更多
        </button>
      </div>

      <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
          <br />
          Max number of guests: {place.maxGuests}
          <br />
        </div>

        <div>
          <Booking place={place} />
        </div>
      </div>

      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">额外信息</h2>
        </div>
        <div className="mb-4 text-sm text-gray-700 mt-2 leading-5">{place.extraInfo}</div>
      </div>
    </div>
  )
}
export default Index
