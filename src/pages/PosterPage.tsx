import NavigationBar from "../components/NavigationBar"
import { ImageGrid } from "../components/PosterGrid"
import ChatGPT from '../assets/chatGPT.png'

import ChatPoster from '../assets/ChatPoster.png'
import CryptoPoster from '../assets/posters/CryptoPoster.png'

const sampleImages = [
    ChatPoster,
    CryptoPoster,
    ChatGPT,
    ChatGPT,
    ChatGPT,
    ChatGPT,
];


function PosterPage() {
    return(
        <>
        <NavigationBar/>
        <h1>Cartazes</h1>
        <ImageGrid images={sampleImages} />
        </>
    )
}

export default PosterPage
