import { FC } from 'react'

interface ImageNotFoundProps {
  className?:string
}

const ImageNotFound: FC<ImageNotFoundProps> = ({className}) => {
  return <><div className={`flex ${className}`}><img  src="https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="/>
  <span className='grow'></span>
  </div></>
}

export default ImageNotFound
