import ImageBox from '../components/ImageBox'
import './Home.css'
import Header from '../components/HomeHeader'
import HomeIcon from '../components/HomeIcon'

import chatGPT from '../assets/chatGPT.png'
import crypto from '../assets/crypto01.jpg'
import eletronicLifeCycle from '../assets/eletronicLifeCycle.jpg'

function Home() {
  return (
    <>
    <Header/>
    <div className='ColorDiv'>
      <h1 className='HomeTitle'>EcoTech</h1>
      <p className='HomeSubtitle'>Tecnologia e Meio Ambiente</p>
      <div className='CenteredDiv'>
        <HomeIcon title="Artigos" link='/articles' image='article'/>
        <HomeIcon title="Cartazes" link='/posters' image='assignment_ind'/>
        <HomeIcon title="Sobre" link='/about' image='info'/>
      </div>
    </div>
    <div className='LeftDiv'>
        <h2>Principais Artigos</h2>
    </div>
    <div className='ImageBoxDiv'>
        <ImageBox title="O Impacto Ambiental das IA's" link='/articleAICost' image={chatGPT} />
        <ImageBox title='Criptomoedas e Seu Alto Custo Energético' link='/articleCrypto' image={crypto} />
        <ImageBox title='A Ilusão da “Reciclagem Digital”' link='/articleDigitalRecycling' image='' />
        <ImageBox title='O Lixo Eletrônico e o Ciclo de Vida dos Nossos Dispositivos' link='/articleEletronicsLifeCycle' image={eletronicLifeCycle} />
        <ImageBox title='Artigo 5' link='/' image='' />
        <ImageBox title='Artigo 6' link='/' image='' />
    </div>
    </>
  )
}

export default Home