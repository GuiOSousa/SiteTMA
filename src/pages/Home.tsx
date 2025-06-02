import ImageBox from '../components/ImageBox'
import './Home.css'

import chatGPT from '../assets/chatGPT.png'

function Home() {
  return (
    <>
    <div className='HeaderPH'>
        <p>HEADER PLACEHOLDER</p>
    </div>
    <h1>Impacto Ambiental das IAs</h1>
    <div className='LeftDiv'>
        <h2>Principais Artigos</h2>
    </div>
    <div className='ImageBoxDiv'>
        <ImageBox title='Artigo 1' link='/article' image={chatGPT} />
        <ImageBox title='Artigo 2' link='/' image='' />
        <ImageBox title='Artigo 3' link='/' image='' />
        <ImageBox title='Artigo 4' link='/' image='' />
        <ImageBox title='Artigo 5' link='/' image='' />
        <ImageBox title='Artigo 6' link='/' image='' />
    </div>
    </>
  )
}

export default Home