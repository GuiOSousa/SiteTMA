import NavigationBar from "../components/NavigationBar"
import ImageBox from '../components/ImageBox'

import chatGPT from '../assets/chatGPT.png'
import crypto from '../assets/crypto01.jpg'
import eletronicLifeCycle from '../assets/eletronicLifeCycle.jpg'

function ArticlePage() {
    return(
        <>
        <NavigationBar/>
        <h1>Artigos</h1>
        <div className="Space"></div>
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

export default ArticlePage