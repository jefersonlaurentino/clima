import "./global.css"
import Cabecalho from "./containers/cabecalho"
import { FaSearch } from "react-icons/fa";
import Card from "./containers/Card";
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

  return (
    <> 
      <DadosApi.Provider value={{ dadosClima , setDadosClima }}>
        <CityApi.Provider value={{ cityApi , setCityApi }}>
          <Cabecalho>
            <FaSearch />
          </Cabecalho>
        </CityApi.Provider>
        <main className="flex justify-center items-center">
          {((!dadosClima == "")?<Card/>:'')}
        </main>
      </DadosApi.Provider>
    </>
  )
}
