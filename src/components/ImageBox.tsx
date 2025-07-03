import type { FC } from "react";
import { Link } from "react-router-dom";
import './ImageBox.css'
import '../pages/Home.css'

interface ImageBoxProps {
	title: string;
	link: string;
  image: string;
}

export const ImageBox: FC<ImageBoxProps> = ({title, link, image}) => {
  return (
    <>
    <div className='ImageBox' style={{
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
        <div className="ImageBoxTextDiv">
          <Link className="IBTitle" to={link} >{title}</Link>
        </div>
    </div>
    </>
  )
}

export default ImageBox