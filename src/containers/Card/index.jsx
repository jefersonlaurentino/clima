import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
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

export default function Card(props) {
    const clima = props.climaAPI.imgClima
    const [ imgClima , setImgClima ] = useState("")
    console.log(clima);

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
        <section className="relative card bg-white w-56 h-[300px] p-2 flex flex-col gap-5 rounded-xl">
            <div className="logo flex flex-col items-center">
                <img src={props.climaAPI.pais} alt="" className="w-6"/>
                <p>{props.climaAPI.city}</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                    <img src={imgClima} alt={props.climaAPI.clima} className=""/>
                </div>
                <div className="flex text-center flex-col items-center justify-center w-1/2">
                    <div>
                        <h2 className="text-3xl font-semibold">{props.climaAPI.temp}</h2>
                    </div>
                    <div className="flex gap-1">
                        <h3 className="">{props.climaAPI.tempMin}</h3>
                        <p>/</p>
                        <h3 className="">{props.climaAPI.tempMax}</h3>
                    </div><h1>{props.climaAPI.clima}</h1>
                </div>
            </div>
            <article className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <p>Censação: <span>{props.climaAPI.censacao}</span></p>
                    <p>Umidade: <span>{props.climaAPI.umidade}</span></p>
                </div>
                <div className="flex justify-between">
                    <abbr title="Velocidade do vento"><img src={vento} alt="" /> <span>{props.climaAPI.veloVento}</span>/km</abbr>
                    <p>
                        <img src={direcao} alt="" style={{transform: `rotateZ(${Number(props.climaAPI.dereVento)}deg)`}} />
                    </p>
                </div>
            </article>
            <button className="absolute bottom-1 underline" onClick={props.click}>Mais informações</button>
        </section>
    )
}