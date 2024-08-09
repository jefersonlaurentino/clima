import celsius from "../../../src/imagens/celsius.png"
import celsiusMax from "../../../src/imagens/celsius_max.png"
import celsiusMin from "../../../src/imagens/celsius_min.png"
import nublado from "../../../src/imagens/02n.png"
import chuva from "../../../src/imagens/10d.png"
import chuvaForte from "../../../src/imagens/11n.png"
import neve from "../../imagens/13d.png"
// import nevoa from "../../imagens/50n.png"
import lua from "../../../src/imagens/01n.png"
import sol from "../../../src/imagens/01d.png"
import solNuves from "../../../src/imagens/02d.png"
import luaNuves from "../../../src/imagens/02n.png"
import cityAPI from "../context/CityApi"
import { useContext, useEffect, useState } from "react"

export default function CardSemana(props){
    // função para mudar as imagens do clima sem a Api
    const { cityApi } = useContext(cityAPI)
    const [ imgClima , setImgClima ] = useState("")
    const [ clima , setClima ] = useState("")
    
    const arrayClima = [ "01d" , "01n" , "02d" , "02n" , "10d" , "11n" , "13d" ]
    
    const climaSemana = (max) => {
        return Math.floor(Math.random() * max)
    }

    useEffect(()=>{
        setClima(arrayClima[climaSemana(arrayClima.length - 1)])

        if (clima == "03n" || clima == "03d" || clima == "04d" || clima == "04n") {
            setImgClima(nublado) //nublado
        } else if (clima == "09d" || clima == "09n" || clima == "10d" || clima == "10n") {
            setImgClima(chuva) // chuva
        } else if (clima == "11d") {
            setImgClima(chuvaForte) //chuva com trovoadas
        } else if ( clima == "13n") {
            setImgClima(neve) //neve
        } else if ( clima == "50n") {
            setImgClima(nevoa) //nevoa
        } else if ( clima == "01d"){
            setImgClima(sol)
        } else if ( clima == "01n"){
            setImgClima(lua)
        } else if ( clima == "02d"){
            setImgClima(solNuves)
        } else {
            setImgClima(luaNuves)
        }
    },[cityApi]) 
    // fim da função

    return (
        <section className="bg-white rounded-lg p-2 mb-1 min-w-[98px] text-center leading-none">
            <article>
                <h3>{props.climaAPI.dia}</h3>
                <img src={imgClima} alt="" className="w-20"/>
                <div className="flex flex-col items-center">
                    <p className="flex ml-1">{props.climaAPI.tempMax}<img src={celsiusMax} alt="" className="w-3"/></p>
                    <p className="flex mr-2">{props.climaAPI.tempMin}<img src={celsiusMin} alt="" className="w-3"/></p>
                </div>
            </article>
        </section>
    )
}