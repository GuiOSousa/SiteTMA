import NavigationBar from "../components/NavigationBar"
import { ImageGrid } from "../components/PosterGrid"
import ChatGPT from '../assets/chatGPT.png'

const sampleImages = [
    ChatGPT,
	"https://picsum.photos/id/1011/400/300",
	"https://picsum.photos/id/1012/400/300",
	"https://picsum.photos/id/1013/400/300",
	"https://picsum.photos/id/1015/400/300",
	"https://picsum.photos/id/1016/400/300",
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
