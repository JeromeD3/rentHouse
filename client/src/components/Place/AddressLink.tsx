/* eslint-disable @typescript-eslint/no-explicit-any */
import Map from '@/assets/map.svg'

export const AddressLink = ({ children, className = null }: any) => {
  if (!className) {
    className = 'my-3 black'
  }
  className += 'flex gap-1 font-semibold underline'

  return (
    <a target="_blank" className={className} href={`https://map.baidu.com/search/${children}`}>
      <Map />
      {children}
    </a>
  )
}
