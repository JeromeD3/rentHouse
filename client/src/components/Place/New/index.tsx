import { PreInput } from './PreInput'
import { Perks } from './Perks'
import { useState } from 'react'
import { PhotosUploader } from './PhotosUploader'

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

  return (
    <div>
      <form action="">
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
