import NavigationBar from "../components/NavigationBar"

function AboutPage() {
    return(
        <>
        <NavigationBar/>
        <h1>Sobre</h1>
        <div className='LeftDiv'>
            <h2>Tecnologia e Meio Ambiente</h2>
            <p>Este site foi desenvolvido pelos alunos Guilherme de Oliveira Sousa, Felipe Mutolese Gaia, Daniel Barbosa Rocha, Lécio Oliveira Gonçalves de Assis e Thiago de Azevedo Zanini,
                para a disciplina de Tecnologia e Meio Ambiente.
            </p>
        </div>
        <div className='RightDiv'>
            <h2>Além das Telas</h2>
            <p>O principal objetivo do projeto é ser mais que um simples conjunto de artigos. É impactar a vida das pessoas e chamar a atenção para tópicos que muitas vezes passam despercebidos.
                Para atingirmos este objetivo, combinamos os conteúdos desse site com cartazes chamativos e interessantes, espalhados pelos mais diversos lugares, trazendo todo tipo de pessoa para cá.
            </p>
        </div>
        </>
    )
}

export default AboutPage