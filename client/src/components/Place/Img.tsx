/* eslint-disable @typescript-eslint/no-explicit-any */

export const Img = ({ place, index = 0, className = null }: any) => {
  console.log(place)
  if (!className) {
    className = 'object-cover'
  }
  return (
    <>
      {place.photos.length > 0 ? (
        <img className={className} src={`http://localhost:3000/uploads/${place.photos[index]}`} />
      ) : (
        <div className="flex justify-center items-center h-full text-2xl text-gray-500">No photo</div>
      )}
    </>
  )
}
