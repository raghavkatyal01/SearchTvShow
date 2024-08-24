import { FC, InputHTMLAttributes } from 'react'

import { FaSearch } from "react-icons/fa";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

const Searchbar: FC<SearchBarProps> = (props) => {
  return (
    <div className='flex flex-row w-full justify-center '>
    <input {...props} className=' w-full p-2  mx-8 rounded-xl border-black border-2 my-2' placeholder='Search TV Show'></input>
    <FaSearch className=' relative top-5 right-16 text-xl'/>
    </div>
  )
}

export default Searchbar