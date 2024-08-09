import imgSensacao from "../../../src/imagens/termico.png"
import celsius from "../../../src/imagens/celsius.png"
import celsiusMax from "../../../src/imagens/celsius_max.png"
import celsiusMin from "../../../src/imagens/celsius_min.png"
import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
import direcao from "../../../src/imagens/direcao.png"
import nublado from "../../../src/imagens/02n.png"
import chuva from "../../../src/imagens/10d.png"
import chuvaForte from "../../../src/imagens/11n.png"
import neve from "../../imagens/13d.png"
import nevoa from "../../imagens/02n.png"
import lua from "../../../src/imagens/01n.png"
import sol from "../../../src/imagens/01d.png"
import solNuves from "../../../src/imagens/02d.png"
import luaNuves from "../../../src/imagens/02n.png"
import { useState } from "react"

export default function Card(props) {
    const clima = props.climaAPI.imgClima
    const [ imgClima , setImgClima ] = useState("")

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
    },200)
    
    return (
        <section className="relative card bg-white w-56 h-[300px] p-2 flex flex-col justify-between rounded-xl">
            <div className="logo flex flex-col items-center">
                <img src={props.climaAPI.pais} alt="" className="w-6"/>
                <p>{props.climaAPI.city}</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-2/5">
                    <img src={imgClima} alt={props.climaAPI.clima} className=""/>
                </div>
                <div className="flex text-center flex-col items-center justify-center w-3/5 h-28">
                    <div>
                        <h2 className="text-3xl font-semibold flex items-start ml-5">{props.climaAPI.temp} <img src={celsius} alt="" /></h2>
                    </div>
                    <div className="flex gap-1">
                        <p className="flex items-end"><img src={celsiusMin} alt="" />{props.climaAPI.tempMin} / {props.climaAPI.tempMax}<img src={celsiusMax} alt="" /></p>
                    </div>
                    <h1 className="font-semibold">{props.climaAPI.clima}</h1>
                </div>
            </div>
            <article className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <div className="campo_info">
                        <img src={imgSensacao} alt="" />
                        <div className="info_campo">
                            <h3>Sensação</h3>
                            <p className="flex items-start ml-1">{props.climaAPI.sensacao} <img src={celsius} alt="" className="w-3"/></p>
                        </div>
                    </div>
                    <div className="campo_info ml-7">
                        <div className="info_campo text-right">
                            <h3>Umidade</h3>
                            <p>{props.climaAPI.umidade}</p>
                        </div>
                        <img src={umidade} alt="" />
                    </div>
                </div>
            </article>
            <button className="underline text-left" onClick={props.click}>Mais informações</button>
        </section>
    )
}