import { FC } from 'react'
import { ImSpinner } from 'react-icons/im'

interface LoadingProps {
  
}

const Loading: FC<LoadingProps> = ({}) => {
  return   <>

  <div className="  h-full  text-5xl flex items-center justify-center animate-spin">
  <ImSpinner />  
</div>
</>
}

export default Loading