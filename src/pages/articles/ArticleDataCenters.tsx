import NavigationBar from "../../components/NavigationBar";
import "../ArticleModel.css";

function ArticleDataCenters() {
  return (
    <>
      <NavigationBar />
      <h1 className="ArticleTitle">
        Centros de Dados e o Custo Ambiental da Nuvem
      </h1>
      <p className="ArticleAuthor">por: Daniel Barbosa Rocha</p>
      <h2 className="Subtitle">A Nuvem Não é Tão Leve Assim</h2>
      <p className="ArticleText">
        Com o avanço da tecnologia e a digitalização de processos, o termo
        "nuvem" tornou-se parte do nosso vocabulário cotidiano. Guardamos fotos,
        enviamos e-mails, assistimos filmes, usamos inteligência artificial —
        tudo isso "na nuvem". Mas o que muitos não sabem é que, por trás dessa
        aparente leveza digital, existe uma infraestrutura física robusta: os
        centros de dados (ou data centers), que exigem enorme quantidade de
        energia elétrica para funcionar.
        <br />
        Esses centros de dados são galpões cheios de servidores que operam 24
        horas por dia, sete dias por semana. Eles exigem energia não apenas para
        processar e armazenar informações, mas também para manter uma
        temperatura adequada, já que o superaquecimento dos equipamentos pode
        causar falhas críticas.
      </p>
      <h2 className="Subtitle">Consumo Energético Elevado</h2>
      <p className="ArticleText">
        Segundo relatório da International Energy Agency (IEA, 2022), os data
        centers foram responsáveis por cerca de 1% a 1,5% do consumo global de
        eletricidade em 2021. Esse valor pode parecer pequeno, mas equivale ao
        consumo de países inteiros como a Argentina ou a Noruega.
        <br />
        A crescente adoção de serviços de streaming, redes sociais,
        videoconferências, inteligência artificial e armazenamento em nuvem
        pressiona ainda mais esse consumo. Para se ter ideia, uma única busca no
        Google consome cerca de 0,3 Wh, e o envio de um e-mail com anexo pode
        chegar a 50g de CO₂ equivalente — um impacto pequeno individualmente,
        mas massivo em escala global.
        <br />
        Além disso, a mineração de dados e o uso de algoritmos de aprendizado de
        máquina (machine learning), especialmente em IA generativa, consomem
        grandes volumes de energia, exigindo servidores de alto desempenho
        constantemente ativos.
      </p>
      <h2 className="Subtitle">Sustentabilidade e o Esforço das Big Techs</h2>
      <p className="ArticleText">
        Diante dessa realidade, grandes empresas como Google, Amazon, Microsoft
        e Meta começaram a investir em centros de dados "verdes". A meta da
        maioria é alcançar neutralidade de carbono até 2030.
        <br />
        O Google, por exemplo, já opera com energia 100% renovável desde 2017 em
        seus data centers e anunciou metas mais ambiciosas: operar com energia
        livre de carbono 24/7 em todos os locais até 2030. A Microsoft segue
        caminho semelhante, com a promessa de se tornar carbon negative até o
        mesmo ano, utilizando tecnologias de captura de carbono e otimização de
        consumo energético.
        <br />
        Ainda assim, o ritmo de expansão da nuvem digital é tão acelerado que
        essas ações, embora positivas, podem não ser suficientes para conter o
        impacto ambiental se não houver também uma mudança no comportamento dos
        usuários.
      </p>
      <h2 className="Subtitle">O Papel do Usuário Digital</h2>
      <p className="ArticleText">
        Embora o problema seja estrutural, o usuário comum pode contribuir com
        atitudes mais conscientes no ambiente digital. Entre elas:
        <br />
        • Evitar armazenar arquivos desnecessários na nuvem
        <br />
        • Reduzir o envio de e-mails em massa ou com anexos pesados
        <br />
        • Utilizar plataformas que investem em energia renovável
        <br />
        • Priorizar o uso de serviços com selos de sustentabilidade digital
        <br />• Desligar backups automáticos e sincronizações não essenciais
      </p>
      <h2 className="Subtitle">Conclusão</h2>
      <p className="ArticleText">
        A nuvem revolucionou a forma como vivemos, trabalhamos e nos conectamos.
        Porém, ela depende de uma estrutura física pesada e altamente
        energética. Tornar os centros de dados mais sustentáveis é urgente, e
        isso exige ação coordenada entre empresas, governos e usuários. O futuro
        digital precisa ser também um futuro verde.
      </p>
      <h2 className="Subtitle">Fontes</h2>
      <a
        className="ArticleLink"
        href="https://www.iea.org/reports/data-centres-and-data-transmission-networks"
      >
        International Energy Agency. Data Centres and Data Transmission
        Networks. IEA, 2022.
      </a>{" "}
      <br />
      <a
        className="ArticleLink"
        href="https://sustainability.google/projects/24-7/"
      >
        Google Sustainability Report. 24/7 Carbon-Free Energy by 2030.
      </a>{" "}
      <br />
      <a
        className="ArticleLink"
        href="https://www.microsoft.com/en-us/sustainability"
      >
        Microsoft. Sustainability Commitments.
      </a>{" "}
      <br />
      <a
        className="ArticleLink"
        href="https://theshiftproject.org/en/article/lean-ict-our-new-report/"
      >
        The Shift Project (2019). Climate crisis: The unsustainable use of
        online video.
      </a>{" "}
      <br />
      <a
        className="ArticleLink"
        href="https://www.nature.com/articles/d41586-020-02497-0"
      >
        Nature, 2020. How to stop data centres from gobbling up the world's
        electricity.
      </a>{" "}
      <br />
    </>
  );
}

export default ArticleDataCenters;
