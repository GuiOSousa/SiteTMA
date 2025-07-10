import NavigationBar from '../../components/NavigationBar'
import '../ArticleModel.css'

function ArticleDigitalRecycling() {
  return (
    <>
    <NavigationBar/>
    <h1 className='ArticleTitle'>A Ilusão da “Reciclagem Digital”: O Desafio do Design e a Solução Modular</h1>
    <p className='ArticleAuthor'>por: Lécio Oliveira Gonçalves de Assis</p>
    {/* <h2 className='Subtitle'>O Custo das IA's</h2> */}
    <p className='ArticleText'>
      O consumo desenfreado de smartphones e outros gadgets resulta em toneladas de lixo
      eletrônico (e-lixo), mas a ideia de “reciclagem” muitas vezes camufla uma realidade duríssima: a maioria desses
      produtos não foi projetada para ser desmontada ou reciclada com facilidade. Ao mesmo tempo, surgem iniciativas
      modernas que oferecem um caminho promissor — ainda que pouco conhecido — para uma economia digital mais sustentável.
      </p>
   <h2 className='Subtitle'>O problema do design fechado</h2>
   <p className='ArticleText'>Dispositivos cada vez mais finos e leves sacrificam a reparabilidade:
    <ul>
      <li>O uso maciço de cola, adesivos e materiais selados dificulta a desmontagem, especialmente de componentes críticos como baterias e telas.</li>
      <li>Um artigo da Wired observa que essas escolhas de design complicam o trabalho de recicladores, que precisam gastar tempo e energia para separar componentes, tornando o processo economicamente inviável.</li>
      <li>Em muitos casos, mesmo que o gadget tenha valor em metais (ouro, alumínio, cobre), este valor se perde se o resíduo não for desmontado corretamente.</li>
    </ul>
    </p>
    <h2 className='Subtitle'>Economia circular e EPR: o papel dos fabricantes</h2>
    <h3 className='Subtitle'>Design for Disassembly (DfD)</h3>
    <p className='ArticleText'>A economia circular defende que produtos sejam projetados desde o início para suportar desmontagem, reparo e reciclagem. Estratégias incluem:
    <ul>
      <li>Parafusos padronizados no lugar de cola.</li>
      <li>Componentes modulares, facilmente substituíveis sem expertise técnica.</li>
      <li>Rótulos claros que facilitam a identificação de materiais.</li>
    </ul>
    </p>
    <h3 className='Subtitle'>Responsabilidade Estendida do Produtor (EPR)</h3>
    <p className='ArticleText'>Esse modelo legal exige que fabricantes assumam ou financiem todo o ciclo de vida do produto — incluindo o descarte. Na prática, isso estimula empresas a criarem produtos que:
    <ul>
      <li>Duram mais.</li>
      <li>Comprometem-se com programas de recolha e reciclagem.</li>
      <li>Implementam design sustentável para reduzir custos pós-consumo.</li>
    </ul>
    </p>
    <h2 className='Subtitle'>Conclusão</h2>
    <p className='ArticleText'>
      Para sair da ilusão da “reciclagem digital”, é essencial repensar o modo como gadgets são projetados, produzidos e descartados.
      A combinação de design modular, EPR eficaz e programas reais de economia circular representa a ponte entre consumo tecnológico e respeito ao planeta.
      Exemplos como Fairphone mostram que é possível — e lucrativo — criar produtos que realmente duram.
    </p>
    <h2 className='Subtitle'>Fontes</h2>
    <a className='ArticleLink' href='https://arxiv.org/abs/2302.10402'>https://arxiv.org/abs/2302.10402</a> <br></br>
    <a className='ArticleLink' href= 'https://medium.com/%40OdaiQassam/addressing-the-electronic-waste-crisis-through-circular-economy-practices-a7d55ea7de0f'>https://medium.com/%40OdaiQassam/addressing-the-electronic-waste-crisis-through-circular-economy-practices-a7d55ea7de0f</a> <br></br>
    <a className='ArticleLink' href='https://talkbacks.com/sustainability/transport/circular-economy-electronics/'>https://talkbacks.com/sustainability/transport/circular-economy-electronics/</a> <br></br>
    {/* <a className='ArticleLink' href='https://www.cnnbrasil.com.br/tecnologia/chatgpt-gasta-uma-garrafa-dagua-a-cada-100-palavras-geradas-diz-pesquisa/'>https://www.cnnbrasil.com.br/tecnologia/chatgpt-gasta-uma-garrafa-dagua-a-cada-100-palavras-geradas-diz-pesquisa/</a> <br></br> */}
    </>
  )
}

export default ArticleAICost