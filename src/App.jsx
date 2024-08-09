import "./global.css"
import Cabecalho from "./containers/cabecalho"
import { FaSearch } from "react-icons/fa";
import Card from "./containers/Card";
import CardEstendido from "./containers/Card_estendido";
import CardSemana from "./containers/Card_semana";
import CityApi from "./containers/context/CityApi"
import ajuda from "./imagens/question.png"
import { useEffect, useState } from "react";
import Card_phone from "./containers/Card_phone";


export function App() {

  const [ cityApi , setCityApi ] = useState("sao paulo")
  const [ dadosClima , setDadosClima ] = useState("")

  const [ city , setCity ] = useState()
  const [ pais , setPais ] = useState('')
  const [ temp , setTemp ] = useState('')
  const [ clima , setClima ] = useState('')
  const [ imgClima , setImgClima ] = useState("")
  const [ tempMax , setTempMax ] = useState('')
  const [ tempMin , setTempMin ] = useState('')
  const [ sensacao , setsensacao ] = useState('')
  const [ umidade , setUmidade ] = useState('')
  const [ veloVento , setVeloVento ] = useState('')
  const [ dereVento , setDereVento ] = useState('')
  const [ lon , setLon ] = useState('')
  const [ lat , setLat ] = useState('')
  const [ nascerSol , setNascerSol ] = useState('')
  const [ PorSol , setPorSol ] = useState('')
  const arraySemana = [ "domingo" , "segunda" , "terça" , "quarta" , "quinta" , "sexta" , "sabado" ]
  const [ semana , setSemana ] = useState([])
  
  setTimeout(()=>{
    let NascerSol = new Date(Number(dadosClima.sys.sunrise * 1000))
    let nascerHoras = NascerSol.getHours()
    let nascerNimutos = NascerSol.getMinutes()

    let porSol = new Date(Number(dadosClima.sys.sunset * 1000))
    let porHoras = porSol.getHours()
    let porNimutos = porSol.getMinutes()

    setImgClima(dadosClima.weather[0].icon)
    setCity(dadosClima.name)
    setPais(`https://flagcdn.com/16x12/${(dadosClima.sys.country).toLowerCase()}.png`)
    setClima(dadosClima.weather[0].description)
    setTemp(parseInt(dadosClima.main.temp))
    setTempMax(parseInt(dadosClima.main.temp_max))
    setTempMin(parseInt(dadosClima.main.temp_min))
    setsensacao(parseInt(dadosClima.main.feels_like))
    setUmidade(`${dadosClima.main.humidity}%`)
    setVeloVento(`${parseInt(dadosClima.wind.speed * 3.6)}Km/h`)
    setDereVento(dadosClima.wind.deg)
    setLon(dadosClima.coord.lon)
    setLat(dadosClima.coord.lat)
    setNascerSol((`${(nascerHoras < 10) ? "0"+nascerHoras: nascerHoras}:${(nascerNimutos < 10) ? "0"+nascerNimutos : nascerNimutos}`))
    setPorSol((`${(porHoras < 10) ? "0"+porHoras: porHoras}:${(porNimutos < 10) ? "0"+porNimutos : porNimutos}`))
  },350)

  const api = async()=>{
    return await (
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&APPID=46a95d36faa14230ee1af68172883766&lang=pt_br&units=metric`)
        .then(res => res.json())
        .catch(err => console.log(err))
      )
    }

  const consumirAPI = async() =>{
    setDadosClima(await api(cityApi))
  }

  useEffect(()=>{
    consumirAPI()
    let diaDaSemana = new Date().getDay()
    let array = []
    let diaPos =  []
    let diaAnt= []
    arraySemana.forEach((e)=>(arraySemana.indexOf(e) > diaDaSemana)? diaPos.push(e): diaAnt.push(e))
    diaPos.forEach((e)=>array.push(e))
    diaAnt.forEach((e)=>array.push(e))
    setSemana(array)
  },[cityApi])

  let tamanhoTela = null
  let size = null
  

  const reSize = () =>{
    (window.innerWidth > 550)? tamanhoTela = true: tamanhoTela = false
  }

  addEventListener("resize" , () =>{
    size = window.innerWidth
    let card = document.querySelector(".card").classList.contains("hidden")
    let e = null
    if (size < 550) {
      tamanhoTela = false
      
      if (card) {
        document.querySelector(".card_estendido").classList.add("true")
        e = document.querySelector(".card_estendido").classList.contains("true")
      }
      if (e) {
        document.querySelector(".card_estendido").classList.add('hidden')
        document.querySelector(".cardPhone").classList.remove('hidden')
        document.querySelector(".cardPhone").classList.remove('true')
      }
    } else {
      tamanhoTela = true
      if (card) {
        document.querySelector(".cardPhone").classList.add("true")
        e = document.querySelector(".cardPhone").classList.contains("true")
      }
      if (e) {
        document.querySelector(".cardPhone").classList.add('hidden')
        document.querySelector(".card_estendido").classList.remove('hidden')
        document.querySelector(".card_estendido").classList.remove('true')
      }
    }
  })

  const estenderCard = () => {
    reSize()
    document.querySelector(".card").classList.remove("rodar_card_estendido")
    document.querySelector(".card").classList.remove("card_estendi")
    document.querySelector(".card").removeAttribute("style")
    document.querySelector(".card").classList.add("rodar_card")
    setTimeout(()=>{
      document.querySelector(".card").classList.add("hidden")
      document.querySelector(".card").classList.remove("rodar_card")
      document.querySelector('.cardPhone').classList.remove("voltar")
      document.querySelector('.cardPhone').classList.add("card_estendi")
      if (tamanhoTela) {
        document.querySelector(".card_estendido").classList.remove("hidden")
        document.querySelector(".card_estendido").classList.remove("hidden")
        document.querySelector(".card_estendido").classList.add("rodar_card_estendido")
        document.querySelector(".card_estendido").classList.add("true")
      } else {
        document.querySelector('.cardPhone').classList.remove("hidden")
        document.querySelector(".cardPhone").classList.add("rodar_card_estendido")
        document.querySelector(".cardPhone").classList.add("true")
      }
      setTimeout(()=>{
        document.querySelector(".cardPhone").style = "transform: rotateY(0deg);"
        document.querySelector(".card_estendido").classList.remove("rodar_card_estendido")
        document.querySelector(".card_estendido").classList.add("info")
        document.querySelector(".card_estendido").style = "transform: rotateY(0deg); width: 500px;"
      },1000)
    },1000)
  }

  const minimizarCard = () => {
    document.querySelector(".cardPhone").classList.remove("true")
    document.querySelector(".card_estendido").classList.remove("true")
    document.querySelector(".cardPhone").classList.remove("rodar_card_estendido")
    document.querySelector(".cardPhone").classList.remove("card_estendi")
    document.querySelector(".cardPhone").classList.add("voltar")
    document.querySelector(".card_estendido").classList.remove("info")
    document.querySelector(".card_estendido").classList.add("info_voltar")
    setTimeout(()=>{
      setTimeout(()=>{
        document.querySelector(".cardPhone").removeAttribute("style")
        document.querySelector(".card_estendido").classList.add("hidden")
        document.querySelector(".cardPhone").classList.add("hidden")
        document.querySelector(".card_estendido").classList.remove("info_voltar")
        document.querySelector(".card_estendido").removeAttribute("style")
        document.querySelector(".card").classList.remove("hidden")
        document.querySelector(".card").classList.add("card_estendi")
        document.querySelector(".card").classList.add("rodar_card_estendido")
        setTimeout(()=>{
          document.querySelector(".card").setAttribute("style" , "transform: rotateY(0deg);")
        },1000)
      },500)
    },1000) 
  }

  const msgInformacao = () => {
    document.querySelector(".informacao").classList.add('animacao')
    document.querySelector(".informacao").classList.remove('hidden')
    setTimeout(()=>{
      document.querySelector(".informacao").classList.add('hidden')
      document.querySelector(".informacao").classList.remove('animacao')
    },6000)
  }

  return (
    <> 
        <CityApi.Provider value={{ cityApi , setCityApi }}>
          <Cabecalho>
            <FaSearch />
          </Cabecalho>
        <main>
          <section className="flex justify-center items-center">
            {((!dadosClima == "")?<Card click={estenderCard} climaAPI={{city, pais , imgClima , temp , tempMax , tempMin , clima , lat , lon , veloVento , dereVento , umidade , sensacao ,nascerSol , PorSol }}/>:'')}
            {((!dadosClima == "")?<CardEstendido 
            click={minimizarCard} 
            climaAPI={{city, pais , imgClima , temp , tempMax , tempMin , clima , lat , lon , veloVento , dereVento , umidade , sensacao ,nascerSol , PorSol}}/>:'')}
            <Card_phone click={minimizarCard} climaAPI={
              {
                lat , lon , sensacao , dereVento , nascerSol , umidade , PorSol , veloVento
              }
            }/>
          </section>
         
          <section className="mt-5 m-auto max-w-5xl">
            <div className="relative flex items-center">
              <div className="informacao absolute max-w-96 -top-28 opacity-0 hidden">
                <div className="w-11/12 bg-neutral-700 text-white p-2 text-justify m-auto rounded-md">
                  <p>As informações do clima para os próximos dias da semana são falsas. A API utilizada não tem a funcionalidade necessária, mas é um exemplo de como seria mostrado as informações.</p>
                </div>
              </div>
              <h2 className="pl-3">Proximas Semanas: </h2>
              <img src={ajuda} alt="ajuda" className="cursor-pointer w-5 h-5" onClick={msgInformacao}/>
            </div>
            <div className="div_semana flex justify-around gap-2 p-3 overflow-y-hidden">
              {semana.map((dia)=><CardSemana key={dia} climaAPI={{imgClima , temp , tempMax , tempMin , dia}}/>)}
            </div>
          </section>
        </main>
        </CityApi.Provider>
    </>
  )
}
