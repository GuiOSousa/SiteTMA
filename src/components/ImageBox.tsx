import { FC } from "react";
import { Link } from "react-router-dom";
import './ImageBox.css'
import '../pages/Home.css'

export const ImageBox: FC = () => {
  return (
    <>
    <div className='ImageBox'>
        <Link className="IBTitle" to='/article' >Titulo</Link>
    </div>
    </>
  )
}

export default ImageBox