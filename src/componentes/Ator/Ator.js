import './Ator.css'

function Ator(props) {

    return (

        <div className="Ator">
            <img src={props.img} alt={props.nome}/>            
            <h3>{props.nome}</h3>
            <p>{props.personagem}</p>
        </div>
    )


}

export default Ator