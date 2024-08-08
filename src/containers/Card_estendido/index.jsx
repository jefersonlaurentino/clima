import imgSensacao from "../../../src/imagens/termico.png"
import celsius from "../../../src/imagens/celsius.png"
import celsiusMax from "../../../src/imagens/celsius_max.png"
import celsiusMin from "../../../src/imagens/celsius_min.png"
import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
import nascerSol from "../../../src/imagens/alvorecer.png"
import porSol from "../../../src/imagens/por-do-sol.png"
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

export default function CardEstendido (props) {

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
        <section className="card_estendido relative card_estendi bg-white p-2 rounded-xl flex gap-4 hidden w-56 h-[300px] overflow-hidden">
            <div className="flex flex-col w-56 gap-8">
                <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                        <h2>{props.climaAPI.city}</h2>
                        <img src={props.climaAPI.pais} alt="" className="w-6" />
                    </div>
                    <img src={imgClima} alt="" className="w-48"/>
                    <p className="font-semibold">{props.climaAPI.clima}</p>
                    <h3 className="font-semibold text-3xl flex items-start">{props.climaAPI.temp} <img src={celsius} alt=""/></h3>
                    <div className="flex text-2xl">
                        <p className="flex items-end mr-5"><img src={celsiusMin} alt="" />{props.climaAPI.tempMin} / {props.climaAPI.tempMax} <img src={celsiusMax} alt="" /></p>
                    </div>
                </div>
                <button className="absolute bottom-1 underline" onClick={props.click}>Voltar as informações</button>
            </div>
            <div>
                <div className="absolute w-1/2 h-[95%] p-2 div_info flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="info_campo ml-2">
                            <h3>Latitude</h3>
                            <p>{props.climaAPI.lat}</p>
                        </div>
                        <div className="info_campo">
                            <h3>Longitude</h3>
                            <p>{props.climaAPI.lon}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="campo_info">
                            <img src={imgSensacao} alt="Icone da sensação termica"/>
                            <div className="info_campo">
                                <h3>Sensação</h3>
                                <p className="ml-2">{props.climaAPI.sensacao}</p>
                            </div>    
                        </div>
                        <div className="campo_info">
                            <div className="info_campo text-right">
                                <h3>Unidade</h3>
                                <p>{props.climaAPI.umidade}</p>
                            </div>
                            <img src={umidade} alt="Icone da unidade" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="campo_info gap-1">
                            <img src={vento} alt="" />
                            <div className="info_campo">
                                <h3>Vel. vento</h3>
                                <p>{props.climaAPI.veloVento}</p>
                            </div>
                        </div>
                        <div className="flex items-center flex-col">
                            <h3>Dir. vento</h3>
                            <img src={direcao} alt="Direção do vento" style={{transform: `rotateZ(${Number(props.climaAPI.dereVento)}deg)`, width: "1.3rem"}}/>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="info_campo">
                            <h3>Nascer do sol</h3>
                            <div className="campo_info gap-1">
                                <img src={nascerSol} alt="" />
                                <p>{props.climaAPI.nascerSol}</p>
                            </div>
                        </div>
                        <div className="info_campo">
                                <h3>Por do sol</h3>
                                <div className="campo_info gap-1">
                                <p>{props.climaAPI.PorSol}</p>
                                <img src={porSol} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <a href="https://openweathermap.org/" target="_blank" className="underline text-gray-400">fonte: Openweather</a>
                    </div>
                </div>
            </div>
        </section>
    )
}