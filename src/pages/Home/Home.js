import './Home.css';
import { Header } from "../../components/Header"
import { EventCard } from '../../components/EventCard/EventCard';
import {useState, useEffect} from 'react'

const eventosIniciais = [
  { 
    id: 1,
    nome: "Protesto pela falta de café",
    data: "11/08/2023 10:03",
    img: "https://static.preparaenem.com/2021/04/graos-de-cafe.jpg"
  },
  {
    id: 2,
    nome: "Dia do surto",
    data: "31/12/1999 23:59",
    img: "https://aventurasnahistoria.uol.com.br/media/_versions/erro_de_sistema_widelg.jpg"
  },
  {
    id: 3,
    nome: "Click",
    data: "00/00/00",
    img: "https://static.wixstatic.com/media/98c203_57daecfc91f04446bfba8d66edfc1bed~mv2_d_1226_1226_s_2.jpg/v1/fill/w_1226,h_1226,al_c/98c203_57daecfc91f04446bfba8d66edfc1bed~mv2_d_1226_1226_s_2.jpg"
  },
]

export function Home() {
  const estadoDoNavegador =JSON.parse(localStorage.getItem("eventos:609"))

  const [eventos, setEventos] = useState(estadoDoNavegador ?? eventosIniciais)
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [img, setImg] = useState("")
  const [descricao, setDescricao] = useState("")

  
  function converterImg(eventoDeChange) {
    if(eventoDeChange.target.files.length<= 0) {
      return;
    }
    const reader = new FileReader()
    
    reader.readAsDataURL(eventoDeChange.target.files[0])
    
    reader.onload = () => {
      setImg (reader.result)
    }
    
  }
  
  function cadastrarEvento(eventoDeSubmit) {
    eventoDeSubmit.preventDefault()
    const id = eventos.length > 0 ? eventos[eventos.length -1].id + 1 : 1
    
    const novoEvento = {
      id,
      nome,
      data,
      img,
      descricao
    }
    
    setEventos([...eventos, novoEvento])
    
  }
  
  function deletarEvento (id) {
    const eventosFiltrados = eventos.filter(evento => evento.id !== id)
    
    setEventos(eventosFiltrados)
  }

  async function captarEventos () {

    try {
      let resposta = await fetch("http://localhost:80/api/events")
      let dados = await resposta.json()

    }
    catch (e) {
  
    }
  } 
  
  useEffect(()=> {
    localStorage.setItem("eventos:609", JSON.stringify(eventos))
    
  },[eventos])

  useEffect(()=> {
    captarEventos ()

  }, [])

  return (
    <> {/* fragmento de tag utilizado para envolver tags filhas */}
      <Header />

      <div className="App">
        <form onSubmit={cadastrarEvento}>

          <div>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome' onChange={(eventoDeChange)=> { setNome (eventoDeChange.target.value)}}/>
          </div>
          <div>
            <label htmlFor='data'>Data</label>
            <input type='datetime-local' id='data' onChange={(eventoDeChange)=> { setData (eventoDeChange.target.value)}} />
          </div>
          <div>
            <label htmlFor='descricao'>Descrição</label>
            <input type='text' id='descricao' onChange={(eventoDeChange)=> { setDescricao (eventoDeChange.target.value)}}/>
          </div>
          <div className='label-img'>
            <label htmlFor='img'>Selecione uma imagem</label>
            <input type='file' id='img'onChange={converterImg} />
          </div>

          <button>Cadastrar</button>
          
        </form>

        <div className='container-eventos'>
          {
            eventos.map(evento => {
              return (
                <EventCard 
                  key={evento.id}
                  id={evento.id}
                  nome={evento.nome}
                  data={evento.data}
                  img={evento.img}
                  descricao={evento.descricao}
                  deletarEvento={deletarEvento}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}



//export default App;//

