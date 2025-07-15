import NavigationBar from "../components/NavigationBar";
import ImageBox from "../components/ImageBox";
import "./ArticlePage.css";

import chatGPT from "../assets/chatGPT.png";
import crypto from "../assets/crypto01.jpg";
import eletronicLifeCycle from "../assets/eletronicLifeCycle.jpg";
import dataCenters from "../assets/cloud.png";
import digitalRecycling from "../assets/digitalRecycling.png";
import precisionAgriculture from "../assets/agriculturaPrecisao.png";

function ArticlePage() {
  return (
    <div className="ArticlePage">
      <NavigationBar />
      <h1>Artigos</h1>
      <div className="Space"></div>
      <div className="ImageBoxDiv">
        <ImageBox
          title="O Impacto Ambiental das IA's"
          link="/articleAICost"
          image={chatGPT}
        />
        <ImageBox
          title="Criptomoedas e Seu Alto Custo Energético"
          link="/articleCrypto"
          image={crypto}
        />
        <ImageBox
          title='A Ilusão da "Reciclagem Digital"'
          link="/articleDigitalRecycling"
          image={digitalRecycling}
        />
        <ImageBox
          title="O Lixo Eletrônico e o Ciclo de Vida dos Nossos Dispositivos"
          link="/articleEletronicsLifeCycle"
          image={eletronicLifeCycle}
        />
        <ImageBox
          title="Centros de Dados e o Custo Ambiental da Nuvem"
          link="/articleDataCenters"
          image={dataCenters}
        />
        <ImageBox
          title="Agricultura de Precisão: A Revolução Sustentável no Campo"
          link="/articlePrecisionAgriculture"
          image={precisionAgriculture}
        />
      </div>
    </div>
  );
}

export default ArticlePage;
