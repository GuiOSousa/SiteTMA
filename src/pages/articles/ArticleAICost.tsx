import NavigationBar from '../../components/NavigationBar'
import '../ArticleModel.css'

function ArticleAICost() {
  return (
    <>
    <NavigationBar/>
    <h1 className='ArticleTitle'>O Impacto Ambiental das IA's</h1>
    <p className='ArticleAuthor'>por: Guilherme de Oliveira Sousa</p>
    <h2 className='Subtitle'>O Custo das IA's</h2>
    <p className='ArticleText'>Um dos mais significativos fatores que determinam o impacto ambiental das IA's é o alto consumo de energia.<br/>
   Os Large Language Models (Modelos Grandes de Linguagem), popularmente conhecidos como IA's, são modelos computacionais com bilhões e bilhões de parâmetros.
   Na fase de treinamento, esses modelos consomem quantidades gigantescas de dados. Tanto o armazenamento dos dados quanto a o processamento destes pelo modelo exigem grande poder computacional,
   o que exige um grande consumo de energia.</p>
   <h2 className='Subtitle'>Dióxido de Carbono</h2>
   <p className='ArticleText'>Os chamados Data Centers, um conjunto de computadores poderosos utilizados no processamento desses dados, produzem, durante a fase de treinamento desses modelos, centenas de toneladas de
   CO2 (quantidade de gás produzida na geração de energia utilizada). Em 2019, o modelo GPT-3 liberou 552 toneladas de CO2 durante sua fase de treinamento, o equivalente a 123 carros rodando por um ano.
    </p>
    <h2 className='Subtitle'>Consumo de Água</h2>
    <p className='ArticleText'>Outro impacto significativo dos LLM's é o consumo de água, graças a necessidade de resfriamento das máquinas dos Data Centers. A água utilizada para o
      resfriamento pode, caso descartada em rios ou lagos, prejudicar a fauna e flora local. <br/>
      O GPT-3 consumiu, durante sua fase de treinamento, 700 mil litros de água potável. Modelos mais recentes, como o GPT-4, consomem em média 4 ml de água por resposta gerada. Parece pouco? Estima-se que,
      em janeiro de 2025, o chatGPT tenha recebido 5,2 bilhões de acessos. Assumindo uma média razoável de 4 prompts por acesso, teriamos um total de 83,2 milhões de litros de água consumidos num único mês.
    </p>
    <h2 className='Subtitle'>Conclusão</h2>
    <p className='ArticleText'>O impacto ambiental das IA's é inegável, e só tende a aumentar. Novos usuários entram a cada dia, aumentando cada vez mais o consumo.<br/>
      É imprescindível que corporações detentoras de LLM's se projetem para alimentar seus modelos com energia sustentável e reduzam o custo de água para mantê-los funcionando.
    </p>
    <h2 className='Subtitle'>Fontes</h2>
    <a className='ArticleLink' href='https://www.ufsm.br/pet/sistemas-de-informacao/2024/10/21/o-impacto-ambiental-das-inteligencias-artificiais'>https://www.ufsm.br/pet/sistemas-de-informacao/2024/10/21/o-impacto-ambiental-das-inteligencias-artificiais</a> <br></br>
    <a className='ArticleLink' href= 'https://explodingtopics.com/blog/chatgpt-users'>https://explodingtopics.com/blog/chatgpt-users</a> <br></br>
    <a className='ArticleLink' href='https://en.wikipedia.org/wiki/Environmental_impact_of_artificial_intelligence?utm_source=chatgpt.com'>https://en.wikipedia.org/wiki/Environmental_impact_of_artificial_intelligence?utm_source=chatgpt.com</a> <br></br>
    <a className='ArticleLink' href='https://www.cnnbrasil.com.br/tecnologia/chatgpt-gasta-uma-garrafa-dagua-a-cada-100-palavras-geradas-diz-pesquisa/'>https://www.cnnbrasil.com.br/tecnologia/chatgpt-gasta-uma-garrafa-dagua-a-cada-100-palavras-geradas-diz-pesquisa/</a> <br></br>
    </>
  )
}

export default ArticleAICost