import { PreInput } from './PreInput'
import { Perks } from './Perks'
import { useEffect, useState } from 'react'
import { PhotosUploader } from './PhotosUploader'
import request from '@/utils/request'
import { Nav } from '../../Account/Nav'
import { Navigate, useParams } from 'react-router-dom'

export const New = () => {
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState<string[]>([])

  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState<string[]>([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)

  const [redirect, setRedirect] = useState(false)

  const { id } = useParams()

  const saveNewPlace = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const placeData = {
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    }
    if (id) {
      await request.put(`/places/${id}`, { ...placeData, id })

      // update
    } else {
      // new

      await request.post('/places', placeData)
    }

    setRedirect(true)
  }

  useEffect(() => {
    if (!id) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.get(`/places/${id}`).then((res: any) => {
      console.log(res)

      setTitle(res.title)
      setAddress(res.address)
      setAddedPhotos(res.photos)
      setDescription(res.description)
      setPerks(res.perks)
      setExtraInfo(res.extraInfo)
      setCheckIn(res.checkIn)
      setCheckOut(res.checkOut)
      setMaxGuests(res.maxGuests)
    })
  }, [id])
  if (redirect) {
    return <Navigate to="/account/places" />
  }

  return (
    <div>
      <Nav />
      <form onSubmit={saveNewPlace}>
        <PreInput title="标题" desc="xxx" />
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="标题,例如 ：my lovely apt " />

        <PreInput title="地址" desc="xxxxxxxx" />
        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="address" />

        <PreInput title="照片" desc="xxxxxxxx" />
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        <PreInput title="描述" desc="xxxxxxxx" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <PreInput title="特权信息" desc="xxxxxxxx" />
        <Perks selected={perks} onChange={setPerks} />

        <PreInput title="额外信息" desc="xxxxxxxx" />
        <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />

        <PreInput title="入住时间 & 离开时间" desc="xxxxxxxx" />
        <div className="grid gap-2  sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">入住时间</h3>
            <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} type="text" placeholder="14:00" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">离开时间</h3>
            <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} type="text" placeholder="11:00" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">最大客人数量</h3>
            <input value={maxGuests} onChange={(e) => setMaxGuests(Number(e.target.value))} type="number" placeholder="1" />
          </div>
        </div>

        <div>
          <button className="primary my-4">保存</button>
        </div>
      </form>
    </div>
  )
}
