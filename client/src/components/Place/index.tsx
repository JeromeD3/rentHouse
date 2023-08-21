import { Link, useParams } from 'react-router-dom'
import Plus from '@/assets/plus.svg'
import { New } from './New'


export const Place = () => {
  const { action } = useParams()

  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
          <Link to={'/account/places/new'} className="bg-primary text-white py-2 px-6 rounded-full inline-flex gap-1">
            <Plus />
            Add new Place
          </Link>
        </div>
      )}
      {action === 'new' && <New />}
    </div>
  )
}
