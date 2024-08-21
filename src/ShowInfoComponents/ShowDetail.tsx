import { FC } from 'react'
import { HiArrowSmLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'


interface ShowDetailProps {
  
}

const ShowDetail: FC<ShowDetailProps> = ({}) => {
  return (
      <>
<div className='bg-gray-200  m-4'>
<Link to="/"><HiArrowSmLeft className='text-3xl'/></Link>
<div className=" max-h-80 m-2 flex items-center justify-center">
      <div className="max-w-4xl flex items-start  m-8 gap-x-6 border-2 p-6  shadow-2xl">
        <img
          className="max-w-80"
          src={"" }
          alt=""
        />
        <div className="flex flex-col items-start">
          <h1 className="text-4xl mb-8">Show heading</h1>
          <p className="text-2xl mb-8 font-bold">Show Category</p>
          <p className="mb-16 text-gray-700">
         showDescription
          </p>
          <div className="flex gap-x-4">
            
          </div>
        </div>
      </div>
    </div>
   
    </div>
</>
  )
}

export default ShowDetail