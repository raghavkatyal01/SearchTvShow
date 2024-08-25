import { FC } from 'react'
import { ImSpinner } from 'react-icons/im'

interface LoadingProps {
  className?:string
}

const Loading: FC<LoadingProps> = ({className}) => {
  return   <>

  <div className={`  h-full  text-5xl flex items-center justify-center animate-spin ${className}`}>
  <ImSpinner />  
</div>
</>
}

export default Loading