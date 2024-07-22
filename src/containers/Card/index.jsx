import { useContext, useState } from "react";
import dadosApi from "../context/DadosApi"


export default function Card() {
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
        setPais(dadosClima.sys.country)
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
        <section className="bg-white w-80 p-2 flex flex-col gap-2 rounded-xl">
            <div className="logo flex flex-col items-center">
                <img src="" alt={pais} className="bg-black h-10 w-10 "/>
                <p>{city}</p>
            </div>
            <div className="flex justify-center gap-4">
                <div>
                    <img src="" alt={imgClima} className="bg-black h-40 w-40"/>
                    <h1>{clima}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <h2 className="text-3xl font-semibold">{temp}</h2>
                    </div>
                    <div className="flex gap-1">
                        <h3 className="">{tempMin}</h3>
                        <p>/</p>
                        <h3 className="">{tempMax}</h3>
                    </div>
                </div>
            </div>
            <article>
                <div className="flex justify-between">
                    <p>Censação: <span>{censacao}</span></p>
                    <p>Umidade: <span>{umidade}</span></p>
                </div>
                <div className="flex justify-between">
                    <p>Velocidade: <span>{veloVento}</span>/km</p>
                    <p>Direção: <span>{dereVento}</span></p>
                </div>
                <button className="underline mt-2">Mais informações</button>
            </article>
        </section>
    )
}