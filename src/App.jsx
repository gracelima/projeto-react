import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './assets/Titulo'
import Subtitulo from './assets/Subtitulo'
import Paragrafo from './assets/paragrafo'
import Imagem from './assets/Imagem'
import Cards from './assets/cards'
import Nome from './assets/Titulo'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <Titulo text="Meus conteúdos Favoritos" />
        <Subtitulo text="Olá, sou Grace Ferreira" />
        <Imagem link="https://avatars.githubusercontent.com/u/109769776?s=400&u=5f614d82118107182586784c2cb1f12aa8b2b78e&v=4"/> 
        <Paragrafo text="Cearense de 22 anos, estudo Desenvolvimento Web Front-end, e aqui vai a introdução a alguns dos meus conteúdos favoritos;" />
       <Cards titulo="GIT" paragrafo="Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho." gif="https://thumbs.gfycat.com/HarmoniousFamousGrizzlybear-size_restricted.gif"/>
        <Cards titulo="CSS" paragrafo="CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante." gif="http://38.media.tumblr.com/ff299765acce2dc105e48c43a65b00b1/tumblr_nh02vaYB831tazgixo1_500.gif"/>
        <Cards titulo="REACT" paragrafo="O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes, os componentes são utilizados para reaproveitamento de código e padronização de interface, o que o torna uma tecnologia muito flexível para a solução de problemas e para a construção de interfaces reutilizáveis, uma vez que cada um destes componentes pode ser manipulado de maneira distinta." gif="https://img.buzzfeed.com/buzzfeed-static/static/2021-06/10/18/enhanced/d490aa6e05ea/anigif_enhanced-712-1623350346-50.gif?crop=480:320;0,27"/>
       
    </div>
  )
}

export default App
