import type { FC } from "react";
import { Link } from "react-router-dom";
import "./ImageBox.css";
import "../pages/Home.css";

interface ImageBoxProps {
  title: string;
  link: string;
  image: string;
}

export const ImageBox: FC<ImageBoxProps> = ({ title, link, image }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div
        className="ImageBox"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ImageBoxTextDiv">
          <div className="IBTitle">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default ImageBox;
