import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
import nascerSol from "../../../src/imagens/alvorecer.png"
import porSol from "../../../src/imagens/por-do-sol.png"
import direcao from "../../../src/imagens/direcao.png"
import nublado from "../../../src/imagens/02n.png"
import chuva from "../../../src/imagens/10d.png"
import chuvaForte from "../../../src/imagens/11n.png"
import neve from "../../imagens/13d.png"
// import nevoa from "../../imagens/50n.png"
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
                    <h3 className="font-semibold text-3xl">{props.climaAPI.temp}</h3>
                    <div className="flex gap-1 text-2xl">
                        <p>{props.climaAPI.tempMin}</p>
                        <p>/</p>
                        <p>{props.climaAPI.tempMax}</p>
                    </div>
                </div>
                <button className="absolute bottom-1 underline" onClick={props.click}>Voltar as informações</button>
            </div>
            <div>
                <div className="absolute w-1/2 h-[95%] px-2 div_info flex flex-col justify-between">
                    <div className="flex justify-between gap-5">
                        <p>Lat: {props.climaAPI.lat}</p>
                        <p>Lon: {props.climaAPI.lon}</p>
                    </div>
                    {/* <div>
                        <h3>chuva</h3>
                        <div className="flex justify-between">
                            <p>Em 1h: {(chuvaDe1h != "")? `${chuvaDe1h}mm` : '0mm'}</p>
                            <p>Em 3h: {(chuvaDe3h != "")? `${chuvaDe3h}mm` : '0mm'}</p>
                        </div>
                    </div> */}
                    <div className="flex justify-between">
                        <p>Censação: {props.climaAPI.censacao}</p>
                        <abbr title="umidade">{props.climaAPI.umidade}%<img src={umidade} alt="" /></abbr>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1"><img src={vento} alt="" /><p>{props.climaAPI.veloVento}Km/h</p></div>
                        <p style={{transform: `rotateZ(${Number(props.climaAPI.dereVento)}deg)`}}><img src={direcao} alt="Direção do vento" /></p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex"><img src={nascerSol} alt="" /> {props.climaAPI.nascerSol}</div>
                        <div className="flex">
                            <div className="flex">{props.climaAPI.PorSol}<img src={porSol} alt="" /></div>
                        </div>
                    </div>
                    <a href="https://openweathermap.org/" target="_blank" className="text-end underline text-gray-400">fonte: Openweather</a>
                </div>
            </div>
        </section>
    )
}