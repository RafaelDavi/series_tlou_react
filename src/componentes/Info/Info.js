import Ator from '../Ator/Ator'
import Botao from '../Botao/Botao'
import BotaoRedondo from '../ButtonRedondo/ButtonRedondo'
import Poster from '../Poster/Poster'
import Tabela from '../Tabela/Tabela'
import './Info.css'

function Info() {

    return (
        <div className="info">
            <section>
                <Poster />
            </section>
            <section style={{width: "500px"}}>
                <h1>The last of us</h1>
                <p>Serie: 2023</p> 
                <p>1 Temporada - 12 Episodios</p>
                <div className="buttonGrupo">
                  <Botao texto="Assista agora" />
                <BotaoRedondo icon="bookmark"/>
                <BotaoRedondo icon="share"/>  
                </div>
                
                <p>A série acompanha a jornada de Joel Pedro Pascal, 
                um contrabandista com a tarefa de escoltar a adolescente 
                Ellie Bella Ramsey através de um Estados Unidos 
                pós-apocalíptico em um futuro distópico.
                A série acompanha a jornada de Joel Pedro Pascal, 
                um contrabandista com a tarefa de escoltar a adolescente 
                Ellie Bella Ramsey através de um Estados Unidos 
                pós-apocalíptico em um futuro distópico.</p>
                <Tabela />
            </section>
            <section>
                <h2>Elenco</h2>
                <Ator nome="Pedro Pascal" personagem="Joel" img="https://ovicio.com.br/wp-content/uploads/2023/01/20230116-ovicio-joel-the-last-of-us-555x555.jpg"/>
                <Ator nome="Bella Ramsey" personagem="Ellie" img="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/01/14/44751813-thelastofus-bellaramsey.jpg" />
                <Ator nome="Nick Offerman" personagem="Bill" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-last-of-us-bill-nick-offerman-1675329034.jpg?crop=0.471xw:0.707xh;0.163xw,0.00154xh&resize=640:*"/>
            </section>
        </div>
                )


}

                export default Info