import ImageBox from "../components/ImageBox";
import "./Home.css";
import Header from "../components/HomeHeader";
import { Link } from "react-router-dom";

import chatGPT from "../assets/chatGPT.png";
import crypto from "../assets/crypto01.jpg";
import eletronicLifeCycle from "../assets/eletronicLifeCycle.jpg";
import dataCenters from "../assets/cloud.png";
import precisionAgriculture from "../assets/agriculturaPrecisao.png";
import digitalRecycling from "../assets/digitalRecycling.png";
import sociedadeICT from "../assets/sociedadesustentavel.ict.png";

function Home() {
  return (
    <>
      <Header />
      <div className="ColorDiv">
        <h1 className="HomeTitle">EcoTech</h1>
        <p className="HomeSubtitle">Tecnologia e Meio Ambiente</p>
        <div className="CenteredDiv">
          <Link to="/articles" className="NavigationButton">
            <i className="material-icons">article</i>
            <span>Artigos</span>
          </Link>
          <Link to="/posters" className="NavigationButton">
            <i className="material-icons">assignment_ind</i>
            <span>Cartazes</span>
          </Link>
          <Link to="/about" className="NavigationButton">
            <i className="material-icons">info</i>
            <span>Sobre</span>
          </Link>
        </div>
      </div>
      <div className="LeftDiv">
        <h2>Principais Artigos</h2>
      </div>
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
          title="A Ilusão da “Reciclagem Digital”"
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
      <footer className="Footer">
        <img width={150} src={sociedadeICT} style={{ marginLeft: "10px" }} />

        <p>EcoTech - Tecnologia e Meio Ambiente | 2025</p>
      </footer>
    </>
  );
}

export default Home;
