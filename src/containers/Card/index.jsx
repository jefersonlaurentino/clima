import { useContext, useState } from "react";
import dadosApi from "../context/DadosApi"


export default function Card(props) {
    const { dadosClima } = useContext(dadosApi);
    console.log(dadosClima);

    const [ city , setCity ] = useState('')
    const [ pais , setPais ] = useState('')
    const [ temp , setTemp ] = useState('')
    const [ clima , setClima ] = useState('')
    const [ imgClima , setImgClima ] = useState('')
    const [ tempMax , setTempMax ] = useState('')
    const [ tempMin , setTempMin ] = useState('')
    const [ censacao , setCensacao ] = useState('')
    const [ umidade , setUmidade ] = useState('')
    const [ veloVento , setVeloVento ] = useState('')
    const [ dereVento , setDereVento ] = useState('')

    setTimeout(()=>{
        setCity(dadosClima.name)
        setPais(`https://flagcdn.com/16x12/${(dadosClima.sys.country).toLowerCase()}.png`)
        setImgClima(dadosClima.weather[0].icon)
        setClima(dadosClima.weather[0].description)
        setTemp(parseInt(dadosClima.main.temp))
        setTempMax(parseInt(dadosClima.main.temp_max))
        setTempMin(parseInt(dadosClima.main.temp_min))
        setCensacao(parseInt(dadosClima.main.feels_like))
        setUmidade(dadosClima.main.humidity)
        setVeloVento(dadosClima.wind.speed)
        setDereVento(dadosClima.wind.deg)
    },150)

    return (
        <section className="card bg-white w-56 h-[300px] p-2 flex flex-col gap-5 rounded-xl">
            <div className="logo flex flex-col items-center">
                <img src={pais} alt="" className="w-6"/>
                <p>{city}</p>
            </div>
            <div className="flex justify-center">
                <div className="w-2/5">
                    <img src={`../src/imagens/${imgClima}.png`} alt={clima} className=""/>
                </div>
                <div className="flex flex-col items-center justify-center w-3/5">
                    <div>
                        <h2 className="text-3xl font-semibold">{temp}</h2>
                    </div>
                    <div className="flex gap-1">
                        <h3 className="">{tempMin}</h3>
                        <p>/</p>
                        <h3 className="">{tempMax}</h3>
                    </div><h1>{clima}</h1>
                </div>
            </div>
            <article className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <p>Censação: <span>{censacao}</span></p>
                    <p>Umidade: <span>{umidade}</span></p>
                </div>
                <div className="flex justify-between">
                    <abbr title="Velocidade do vento"><img src="../src/imagens/vento.png" alt="" /> <span>{veloVento}</span>/km</abbr>
                    <p>Direção: <span>{dereVento}</span></p>
                </div>
            </article>
            <button className="underline text-left" onClick={props.click}>Mais informações</button>
        </section>
    )
}