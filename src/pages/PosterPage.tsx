import NavigationBar from "../components/NavigationBar";
import { ImageGrid } from "../components/PosterGrid";
import ChatGPT from "../assets/chatGPT.png";
import "./PosterPage.css";

import ChatPoster from "../assets/ChatPoster.png";
import CryptoPoster from "../assets/posters/CryptoPoster.png";

const sampleImages = [
  ChatPoster,
  CryptoPoster,
  ChatGPT,
  ChatGPT,
  ChatGPT,
  ChatGPT,
];

function PosterPage() {
  return (
    <div className="poster-page">
      <NavigationBar />
      <div className="poster-container">
        <h1>Cartazes</h1>
        <ImageGrid images={sampleImages} />
      </div>
    </div>
  );
}

export default PosterPage;
