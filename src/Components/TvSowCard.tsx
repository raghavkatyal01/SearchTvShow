import { FC } from 'react'
import { Show } from '../Models/Show'
import { Link } from 'react-router-dom'
import { DiVim } from 'react-icons/di'
import ImageNotFound from './ImageNotFound'

interface TvSowCardProps {
  show:Show
}

const TvSowCard: FC<TvSowCardProps> = ({show}) => {
  return (<>
  <div  className=" w-72  flex flex-col ml-12 m-4   hover:shadow-2xl shadow-xl">
   
   {show.image?<img className=" "src={show.image.medium} alt="" />:<ImageNotFound/>}
  

       <h1 className=" p-2 text-m">{show.name}</h1>
       <p className=" p-2 text-sm">{show.summary}</p>
       <span className='grow'></span>
        <Link to={'/ShowDetail/'+show.id} className='cursor-pointer p-4 w-32 border-black border-2 self-center mb-4 rounded-xl hover:bg-gray-500'>View Details</Link>
       
       
      

  
  </div>
  </>)
}

export default TvSowCard