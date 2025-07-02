import NavigationBar from "../components/NavigationBar"
import ImageBox from '../components/ImageBox'
import chatGPT from '../assets/chatGPT.png'

function ArticlePage() {
    return(
        <>
        <NavigationBar/>
        <h1>Artigos</h1>
        <div className="Space"></div>
        <div className='ImageBoxDiv'>
        <ImageBox title="O Impacto Ambiental das IA's" link='/articleAICost' image={chatGPT} />
        <ImageBox title='Artigo 2' link='/' image='' />
        <ImageBox title='Artigo 3' link='/' image='' />
        <ImageBox title='Artigo 4' link='/' image='' />
        <ImageBox title='Artigo 5' link='/' image='' />
        <ImageBox title='Artigo 6' link='/' image='' />
        </div>
        </>
    )
}

export default ArticlePage