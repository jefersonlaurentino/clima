import { useContext , useState } from "react"
import dadosApi from "../context/DadosApi"

export default function CardEstendido (props) {

    const { dadosClima } = useContext(dadosApi)
    

    const [ city , setCity ] = useState()
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
    const [ lon , setLon ] = useState('')
    const [ lat , setLat ] = useState('')
    const [ chuvaDe1h , setChuvaDe1h ] = useState('')
    const [ chuvaDe3h , setChuvaDe3h ] = useState('')
    const [ nascerSol , setNascerSol ] = useState('')
    const [ PorSol , setPorSol ] = useState('')

    setTimeout(()=>{
        let NascerSol = new Date(Number(dadosClima.sys.sunrise * 1000))
        let nascerHoras = NascerSol.getHours()
        let nascerNimutos = NascerSol.getMinutes()

        let porSol = new Date(Number(dadosClima.sys.sunset * 1000))
        let porHoras = porSol.getHours()
        let porNimutos = porSol.getMinutes()

        let clima = dadosClima.weather[0].icon

        if (clima == "03n" || clima == "03d") {
            setImgClima("02d")
        } else if (clima == "04d" || clima == "04n" ) {
            setImgClima("10d")
        } else if (clima == "09d" || clima == "09n") {
            setImgClima("10d")
        } else if (clima == "11d" || clima == "11n") {
            setImgClima("11n")
        } else if (clima == "13d" || clima == "13n") {
            setImgClima("13d")
        } else {
            setImgClima(clima)
        }

        setCity(dadosClima.name)
        setPais(`https://flagcdn.com/16x12/${(dadosClima.sys.country).toLowerCase()}.png`)
        setClima(dadosClima.weather[0].description)
        setTemp(parseInt(dadosClima.main.temp))
        setTempMax(parseInt(dadosClima.main.temp_max))
        setTempMin(parseInt(dadosClima.main.temp_min))
        setCensacao(parseInt(dadosClima.main.feels_like))
        setUmidade(dadosClima.main.humidity)
        setVeloVento(parseInt(dadosClima.wind.speed * 3.6))
        setDereVento(dadosClima.wind.deg)
        setLon(dadosClima.coord.lon)
        setLat(dadosClima.coord.lat)
        setNascerSol((`${(nascerHoras < 10) ? "0"+nascerHoras: nascerHoras}:${(nascerNimutos < 10) ? "0"+nascerNimutos : nascerNimutos}`))
        setPorSol((`${(porHoras < 10) ? "0"+porHoras: porHoras}:${(porNimutos < 10) ? "0"+porNimutos : porNimutos}`))
        // setChuvaDe1h((Object.values(dadosClima.rain)[0] != undefined) ? Object.values(dadosClima.rain)[0] : "")
        // setChuvaDe3h((Object.values(dadosClima.rain)[1] != undefined) ? Object.values(dadosClima.rain)[1] : null)
        
    },150)

    return (
        <section className="card_estendido card_estendi bg-white p-2 rounded-xl flex sm:flex-col gap-4 hidden w-56 h-[300px] overflow-hidden">
            <div className="flex flex-col w-56 gap-8">
                <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                        <h2>{city}</h2>
                        <img src={pais} alt="" className="w-6" />
                    </div>
                    <img src={`../src/imagens/${imgClima}.png`} alt="" className="w-48"/>
                    <p className="font-semibold">{clima}</p>
                    <h3 className="font-semibold">{temp}</h3>
                    <div className="flex gap-1">
                        <p>{tempMin}</p>
                        <p>/</p>
                        <p>{tempMax}</p>
                    </div>
                </div>
                <button className="underline text-left" onClick={props.click}>Voltar as informações</button>
            </div>
            <div>
                <div className="absolute w-1/2 h-[95%] px-2 div_info flex flex-col justify-between">
                    <div className="flex justify-between gap-5">
                        <p>Lat: {lat}</p>
                        <p>Lon: {lon}</p>
                    </div>
                    {/* <div>
                        <h3>chuva</h3>
                        <div className="flex justify-between">
                            <p>Em 1h: {(chuvaDe1h != "")? `${chuvaDe1h}mm` : '0mm'}</p>
                            <p>Em 3h: {(chuvaDe3h != "")? `${chuvaDe3h}mm` : '0mm'}</p>
                        </div>
                    </div> */}
                    <div className="flex justify-between">
                        <p>Censação: {censacao}</p>
                        <abbr title="umidade">{umidade}%<img src="../src/imagens/umidade.png" alt="" /></abbr>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1"><img src="../src/imagens/vento.png" alt="" /><p>{veloVento}Km/h</p></div>
                        <p>Direção: {dereVento}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex"><img src="../src/imagens/alvorecer.png" alt="" /> {nascerSol}</div>
                        <div className="flex">
                            <div className="flex">{PorSol}<img src="../src/imagens/por-do-sol.png" alt="" /></div>
                        </div>
                    </div>
                    <a href="https://openweathermap.org/" target="_blank" className="text-end underline text-gray-400">fonte: Openweather</a>
                </div>
            </div>
        </section>
    )
}