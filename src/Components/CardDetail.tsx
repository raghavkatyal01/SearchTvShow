import { FC } from 'react'
import { Cast } from '../Models/Cast'
import ImageNotFound from './ImageNotFound'

interface ShowCardProps {
    cardDetail:Cast
}

const ShowCard: FC<ShowCardProps> = ({cardDetail}) => {
  return <div className='flex flex-col gap-1'>
       {cardDetail.image? <img src={cardDetail.image.medium} className='rounded-xl ' alt="" />:<ImageNotFound className='w-96'/>}
       <span className='grow'></span>
        <p className='self-center text-sm'>{cardDetail?.name}</p>
  </div>
}

export default ShowCard