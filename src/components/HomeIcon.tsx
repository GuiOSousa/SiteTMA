import type { FC } from "react";
import { Link } from "react-router-dom";
import './HomeIcon.css'
import '../pages/Home.css'

interface HomeIconProps {
	title: string;
	link: string;
  image: string;
}

export const HomeIcon: FC<HomeIconProps> = ({title, link, image}) => {
  return (
    <>
    <div className="HomeIconDiv">
    <i className="material-icons">{image}</i>
    <Link className="IconTitle" to={link} >{title}</Link>
    </div>
    </>
  )
}

export default HomeIcon