import NavigationBar from "../../components/NavigationBar";
import "../ArticleModel.css";

function ArticlePrecisionAgriculture() {
  return (
    <>
      <NavigationBar />
      <h1 className="ArticleTitle">
        Agricultura de Precisão: A Revolução Sustentável no Campo
      </h1>
      <p className="ArticleAuthor">por: Daniel Barbosa Rocha</p>
      <h2 className="Subtitle">O Desafio da Produção Sustentável</h2>
      <p className="ArticleText">
        Com o crescimento da população mundial e a consequente demanda por
        alimentos, a agricultura tem sido pressionada a produzir mais, em menos
        tempo e com menor impacto ambiental. Nesse contexto, surge a agricultura
        de precisão, um modelo que une tecnologia e sustentabilidade para
        transformar o modo como cultivamos e gerenciamos a terra.
        <br />A proposta da agricultura de precisão é simples, mas poderosa:
        produzir mais com menos, utilizando tecnologias avançadas para
        monitorar, prever e tomar decisões mais inteligentes no campo.
      </p>
      <h2 className="Subtitle">O que é Agricultura de Precisão?</h2>
      <p className="ArticleText">
        A agricultura de precisão é um conjunto de práticas que usam tecnologias
        como sensores, drones, GPS, imagens de satélite e inteligência
        artificial para coletar dados em tempo real sobre as condições da
        lavoura, solo, clima e uso de insumos. Esses dados permitem ao
        agricultor aplicar recursos como água, fertilizantes e defensivos de
        forma localizada e exata, evitando desperdícios.
        <br />
        Por exemplo, em vez de irrigar toda a plantação, sensores de umidade
        identificam exatamente quais áreas precisam de água — reduzindo o
        consumo hídrico e aumentando a eficiência. O mesmo se aplica ao uso de
        adubos e agrotóxicos, que podem ser aplicados apenas onde são realmente
        necessários.
      </p>
      <h2 className="Subtitle">Benefícios Ambientais</h2>
      <p className="ArticleText">
        A adoção da agricultura de precisão tem impactos diretos e positivos no
        meio ambiente:
        <br />
        • Redução do uso de insumos: Menos fertilizantes e pesticidas significa
        menor contaminação do solo e dos corpos d'água.
        <br />
        • Economia de água: Sistemas inteligentes de irrigação podem reduzir em
        até 50% o uso de água.
        <br />
        • Menor emissão de gases do efeito estufa: Menos máquinas em operação e
        uso otimizado de recursos contribuem para a redução da pegada de
        carbono.
        <br />
        • Preservação do solo: O manejo orientado por dados evita a compactação
        e o esgotamento do solo.
        <br />• Aumento da produtividade sem expansão de área: Evita o
        desmatamento ao potencializar áreas já cultivadas.
      </p>
      <h2 className="Subtitle">Desafios e Limitações</h2>
      <p className="ArticleText">
        Apesar dos benefícios, a agricultura de precisão ainda enfrenta
        obstáculos, especialmente em países em desenvolvimento:
        <br />
        • Alto custo inicial das tecnologias
        <br />
        • Necessidade de conectividade no campo, o que ainda é limitado em áreas
        rurais
        <br />
        • Falta de capacitação técnica para o uso e interpretação dos dados
        <br />
        • Infraestrutura e acesso desigual às inovações
        <br />
        Iniciativas públicas e privadas vêm trabalhando para superar essas
        barreiras, promovendo a democratização da tecnologia no campo.
      </p>
      <h2 className="Subtitle">Casos Reais</h2>
      <p className="ArticleText">
        No Brasil, empresas como Embrapa e startups do setor agro vêm
        desenvolvendo soluções acessíveis para pequenos e médios produtores. Em
        algumas regiões do Cerrado, o uso de drones e sensores reduziu em até
        30% o uso de defensivos agrícolas, além de melhorar a produtividade.
        <br />
        Outro exemplo está na União Europeia, onde políticas agrícolas já
        incluem metas de digitalização e sustentabilidade agrícola, incentivando
        a adoção de tecnologias verdes.
      </p>
      <h2 className="Subtitle">Conclusão</h2>
      <p className="ArticleText">
        A agricultura de precisão é uma resposta concreta à necessidade de
        equilibrar produção de alimentos com conservação ambiental. Ela
        representa uma fusão estratégica entre tecnologia e sustentabilidade,
        apontando para um futuro onde o campo será cada vez mais digital,
        eficiente e verde.
        <br />
        Se aplicada de forma ampla e acessível, a agricultura de precisão pode
        ser uma aliada crucial na luta contra as mudanças climáticas e na
        construção de um modelo agrícola mais justo e resiliente.
      </p>
      <h2 className="Subtitle">Fontes</h2>
      <a
        className="ArticleLink"
        href="https://www.embrapa.br/agricultura-de-precisao"
      >
        EMBRAPA. Agricultura de Precisão: Conceitos e Aplicações.
      </a>{" "}
      <br />
      <a className="ArticleLink" href="https://www.fao.org">
        FAO – Food and Agriculture Organization. The future of food and
        agriculture – Digital agriculture.
      </a>{" "}
      <br />
      <a className="ArticleLink" href="https://revistagloborural.globo.com">
        Revista Globo Rural. Como a tecnologia está transformando o agronegócio
        brasileiro.
      </a>{" "}
      <br />
      <a
        className="ArticleLink"
        href="https://ec.europa.eu/info/food-farming-fisheries"
      >
        União Europeia. Digital Transformation of EU Agriculture.
      </a>{" "}
      <br />
      <a className="ArticleLink" href="https://iica.int">
        IICA – Instituto Interamericano de Cooperação para a Agricultura.
        Tecnologias digitais para a agricultura sustentável.
      </a>{" "}
      <br />
    </>
  );
}

export default ArticlePrecisionAgriculture;
