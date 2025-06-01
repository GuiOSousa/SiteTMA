import ImageBox from '../components/ImageBox'
import './Home.css'

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
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
    </div>
    </>
  )
}

export default Home