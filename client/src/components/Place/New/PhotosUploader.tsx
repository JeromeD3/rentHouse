import request from '@/utils/request'
import { useState } from 'react'
import Upload from '@/assets/upload.svg'
import Trash from '@/assets/trash.svg'
import Star from '@/assets/star.svg'
import Star2 from '@/assets/star2.svg'

interface PhotosUploaderProps {
  addedPhotos: string[]
  onChange: React.Dispatch<React.SetStateAction<string[]>>
}

export const PhotosUploader = ({ addedPhotos, onChange }: PhotosUploaderProps) => {
  const [photoLink, setPhotoLink] = useState('')

  const addPicByLink = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const { filename }: { filename: string } = await request.post('uploadByLink', { link: photoLink })
    console.log(filename)

    onChange((prev) => [...prev, filename])
    setPhotoLink('')
  }

  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const data = new FormData()

    if (!files) return console.log('no files')

    for (const file of files) {
      data.append('photos', file)
    }

    const filenames: string[] = await request.post('/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    onChange((prev) => [...prev, ...filenames])
  }

  const removePhoto = (link: string) => [onChange([...addedPhotos.filter((photo) => photo !== link)])]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectAsMainPhoto = (e: any, photo: string) => {
    e.preventDefault()

    const newAddedPhotos = [photo, ...addedPhotos.filter((p) => p !== photo)]
    onChange(newAddedPhotos)
  }
  return (
    <>
      <div className="flex gap-2">
        <input value={photoLink} onChange={(e) => setPhotoLink(e.target.value)} type="text" placeholder="xxx" />
        <button onClick={addPicByLink} className="bg-gray-200 px-4 rounded-2xl">
          添加图片
        </button>
      </div>

      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((photo) => (
            <div key={photo} className="h-32 flex relative">
              <img className="object-cover rounded-2xl w-full" src={`http://localhost:3000/uploads/${photo}`} alt="" />
              <button onClick={() => removePhoto(photo)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                <Trash />
              </button>

              <button onClick={(e) => selectAsMainPhoto(e, photo)} className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                {photo === addedPhotos[0] ? <Star2 /> : <Star />}
              </button>
            </div>
          ))}

        <label className="h-32 cursor-pointer items-center flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
          <input multiple type="file" className="hidden" onChange={uploadPhoto} />
          <Upload />
          Upload
        </label>
      </div>
    </>
  )
}
