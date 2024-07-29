import "./global.css"
import Cabecalho from "./containers/cabecalho"
import { FaSearch } from "react-icons/fa";
import Card from "./containers/Card";
import CardEstendido from "./containers/Card_estendido";
import DadosApi from "./containers/context/DadosApi"
import CityApi from "./containers/context/CityApi"
import { useEffect, useState } from "react";


export function App() {

  const [ cityApi , setCityApi ] = useState("sao paulo")
  const [ dadosClima , setDadosClima ] = useState("")
  
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
  },[cityApi])

  const estenderCard = () => {
    document.querySelector(".card").classList.remove("rodar_card_estendido")
    document.querySelector(".card").classList.remove("card_estendi")
    document.querySelector(".card").removeAttribute("style")
    document.querySelector(".card").classList.add("rodar_card")
    setTimeout(()=>{
      document.querySelector(".card").classList.add("hidden")
      document.querySelector(".card").classList.remove("rodar_card")
      document.querySelector(".card_estendido").classList.remove("hidden")
      document.querySelector(".card_estendido").classList.add("rodar_card_estendido")
      setTimeout(()=>{
        document.querySelector(".card_estendido").classList.remove("rodar_card_estendido")
        document.querySelector(".card_estendido").classList.add("info")
        document.querySelector(".card_estendido").style = "transform: rotateY(0deg); width: 500px;"
      },1000)
    },1000)
  }

  const minimizarCard = () => {
    document.querySelector(".card_estendido").classList.remove("info")
    document.querySelector(".card_estendido").classList.add("info_voltar")
    setTimeout(()=>{
      setTimeout(()=>{
        document.querySelector(".card_estendido").classList.add("hidden")
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

  return (
    <> 
      <DadosApi.Provider value={{ dadosClima , setDadosClima }}>
        <CityApi.Provider value={{ cityApi , setCityApi }}>
          <Cabecalho>
            <FaSearch />
          </Cabecalho>
        </CityApi.Provider>
        <main className="flex justify-center items-center">
          {((!dadosClima == "")?<Card click={estenderCard}/>:'')}
          {((!dadosClima == "")?<CardEstendido click={minimizarCard}/>:'')}
        </main>
      </DadosApi.Provider>
    </>
  )
}
