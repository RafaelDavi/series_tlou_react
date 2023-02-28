import './Tabela.css'

function Tabela() {

    return (

        <table>
            <tr>

                <td>Gênero</td>

                <td>Ação</td>
                <td>Ficção</td>
                <td>Drama</td>

            </tr>
            <tr>

                <td>País de origem</td>

                <td colspan="3">EUA</td>

            </tr>
            <tr>

                <td>Tempo de duração</td>

                <td>40 min</td>
                <td colspan="2">1hr</td>

            </tr>
        </table>


    )


}

export default Tabela