import NavigationBar from '../../components/NavigationBar'
import '../ArticleModel.css'

function ArticleCrypto() {
  return (
    <>
    <NavigationBar/>
    <h1 className='ArticleTitle'>Criptomoedas e Seu Alto Custo Energético</h1>
    <p className='ArticleAuthor'>por: Guilherme de Oliveira Sousa</p>
    <h2 className='Subtitle'>Mineração de Criptomoedas</h2>
    <p className='ArticleText'>A famosa "mineração" das criptomoedas é um processo computacional que visa garantir a segurança de transações. De forma simples, os mineradores são responsáveis por validar transações da rede,
       através da resolução de problemas matemáticos complexos. Para que seja atrativo aos mineradores, validar transações retorna quantias em criptomoedas. <br/>
Essa resolução é feita a partir da tentativa e erro, ou seja, testando combinações até que se obtenha o resultado. Esse processo exige um poder computacional elevado e, portanto, grande consumo de energia.</p>
   <h2 className='Subtitle'>Energia consumida</h2>
   <p className='ArticleText'>O processo de mineração, por ser muito atrativo financeiramente, fez com que inúmeras pessoas ao redor do mundo investissem em computadores poderosos para realizar os cálculos necessários. Essas máquinas consomem quantidades exorbitantes de energia. <br/>
Em 2021, o mercado de Bitcoin consumiu 204,5 TWH/ano. Esse valor é maior do que o consumo energético de países inteiros, como Egito (160,1 TWH/ano), Polônia (166,8 TWH/ano) e Tailândia (195,1 TWH/ano) e ligeiramente menor do que o consumo do Vietnam (227,2 TWH/ano) e África do Sul (247,6 TWH/ano). <br/>
Ou seja, se o Bitcoin fosse um país, ele ocuparia a 23ª posição de maior consumo energético do mundo, ficando acima de países com mais de 100 milhões de habitantes. <br/>
Vale ressaltar que a tendência é que estes custos só aumentem, visto que os problemas matemáticos se tornam mais e mais complexos.
</p>
    <h2 className='Subtitle'>Impacto Ambiental</h2>
    <p className='ArticleText'>
      Segundo a De Vries (2019), o número crescente de computadores usados na mineração e a busca pela maior rentabilidade faz com que esse mercado busque por fontes de energias não renováveis, como combustíveis fósseis. <br/>
Estima-se que, em 2020, 75% das "fazendas" de mineração estivessem localizadas na China, onde 60% de toda energia é obtida através do carvão mineral. Embora esse número tenha reduzido drasticamente em 2021, 
após ações legislativas do governo chinês, o mercado cripto migrou para outros países com matrizes energéticas altamente poluentes, como Estados Unidos e Rússia. <br/>
Entre 2020 e 2022, a quantidade média de CO2 liberado por KWH consumido pela rede aumentou drasticamente, devido principalmente ao maior consumo energético, resultando na liberação de 114 milhões de toneladas em 2022.
    </p>
    <h2 className='Subtitle'>Conclusão</h2>
    <p className='ArticleText'>
      É inegável o impacto ambiental do modelo atual de mineração e a urgência de sua resolução. Duas possíveis "soluções", que visam, ao menos, reduzir este impacto, são o investimento em matrizes energéticas menos poluentes e a adoção de um novo sistema de validação, o chamado "Proof of Stake" (contra o atual "Proof of Work"), que visa reduzir a competitividade da mineração e reduzir o número de máquinas.
    </p>
    <h2 className='Subtitle'>Fontes</h2>
    <a className='ArticleLink' href='https://www.poli.usp.br/noticias/polinamidia/77827-como-as-criptomoedas-causam-impacto-ambiental.html'>https://www.poli.usp.br/noticias/polinamidia/77827-como-as-criptomoedas-causam-impacto-ambiental.html</a> <br/>
    </>
  )
}

export default ArticleCrypto