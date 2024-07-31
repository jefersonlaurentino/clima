import nublado from "../../../src/imagens/02n.png"
import chuva from "../../../src/imagens/10d.png"
import chuvaForte from "../../../src/imagens/11n.png"
import neve from "../../imagens/13d.png"
// import nevoa from "../../imagens/50n.png"
import lua from "../../../src/imagens/01n.png"
import sol from "../../../src/imagens/01d.png"
import solNuves from "../../../src/imagens/02d.png"
import luaNuves from "../../../src/imagens/02n.png"
import cityApi from "../context/CityApi"
import { useEffect, useState } from "react"

export default function CardSemana(props){
    // função para mudar as imagens do clima sem a Api
    const [ city ] = useState(cityApi)
    const [ imgClima , setImgClima ] = useState("")
    let clima = ""

    const arrayClima = [ "01d" , "01n" , "02d" , "02n" , "10d" , "11n" , "13d" ]
    const climaSemana = (max) => {
        return Math.floor(Math.random() * max)
    }

    useEffect(()=>{
        clima = arrayClima[climaSemana(arrayClima.length - 1)]
        console.log(clima+12);
    },[city]) 
    // fim da função
    
    setTimeout(()=>{
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
        console.log(clima+14);
    },200)

    return (
        <section className="bg-white rounded-lg p-2">
            <article>
                <img src={imgClima} alt="" />
                <div>
                    <p>18</p>
                    <p>19 / 20</p>
                </div>
            </article>
        </section>
    )
}