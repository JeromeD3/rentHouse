import Wifi from '@/assets/label/wifi.svg'
import Truck from '@/assets/label/truck.svg'
import Tv from '@/assets/label/tv.svg'
import Radio from '@/assets/label/radio.svg'
import Pets from '@/assets/label/thumb-up.svg'
import Entrance from '@/assets/label/arrow.svg'

interface PerksProps {
  selected: string[]
  onChange: React.Dispatch<React.SetStateAction<never[]>>
}

export const Perks = ({ selected, onChange }: PerksProps) => {
  return (
    <>
      <div className="gap-2 mt-2 grid grid-cols-2 md:grid-col-4 lg:grid-cols-6">
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" id="" />
          <Wifi />
          <span>WiFi</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" id="" />
          <Truck />
          <span>免费停车</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" id="" />
          <Tv />
          <span>电视</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" id="" />
          <Radio />
          <span>收音机</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" id="" />
          <Pets />
          <span>宠物</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="" id="" />
          <Entrance />
          <span>隐私进入</span>
        </label>
      </div>
    </>
  )
}
