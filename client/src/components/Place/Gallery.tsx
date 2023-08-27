/* eslint-disable @typescript-eslint/no-explicit-any */
import Photo from '@/assets/photo.svg'
import { useState } from 'react'
import Close from '@/assets/close.svg'

export const Gallery = ({ place }: any) => {
  console.log('place', place)
  const [showAllPhotos, setShowAllPhotos] = useState(false)

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
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:3000/uploads/' + place.photos?.[0]} alt="" />
            </div>
          )}
        </div>

        <div className="grid">
          {place.photos?.[1] && <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:3000/uploads/' + place.photos?.[1]} alt="" />}
          <div className=" overflow-hidden">
            {place.photos?.[2] && (
              <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative" src={'http://localhost:3000/uploads/' + place.photos?.[2]} alt="" />
            )}
          </div>
        </div>
      </div>

      <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500">
        <Photo />
        获取更多
      </button>
    </div>
  )
}
