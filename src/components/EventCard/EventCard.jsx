import styled,{css} from 'styled-components'

import { useNavigate } from 'react-router-dom'

/* em um componete dinamico recebmos os valores em um parametro de um objeto cujo nome por convencao*/

const Card = styled.div`
    width: 25rem;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 5px gray;
    background-color: ${({dataJaPassou})=> dataJaPassou ?"red" : "white"};
    transition: 0.2s;

    ${
        ({dataJaPassou}) => dataJaPassou && css `
            color:red;
        `
    }

    &:hover {
        transform:scale(1.1);
    }


    img {
        width: 100%;
        height: 50%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    div {
        padding: 0.5rem;
    }
`

export function EventCard (props) {
   const navigate = useNavigate()
   /* retorna uma funcao pra mudar de pagina */


   function navegarParaDetalhes () {
    navigate ('/eventos/${props.id}', {
        state: {
            nome: props.nome,
            data: props.data,
            img: props.img,
            descricao: props.descricao,
            id: props.id
        }
    })

   }

   const dataJaPassou = new Date ("2023-09-22").getTime() < new Date(). getTime()

    return (
         <Card dataJaPassou={dataJaPassou}>
            {
                props.img && <img src={props.img} />
            }

            <div>
            <h2>{props.nome}</h2>
            <p>{props.data? props.data : "Sem data Definida"}</p>
            <p>{props.descricao}</p>

            <button onClick={()=> props.deletarEvento(props.id)}>Deletar</button>
            <button onClick={navegarParaDetalhes} >Ver detalhes</button>
          
            </div>
         </Card>
    )
}