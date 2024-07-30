
export default function CardEstendido (props) {
    return (
        <section className="card_estendido relative card_estendi bg-white p-2 rounded-xl flex gap-4 hidden w-56 h-[300px] overflow-hidden">
            <div className="flex flex-col w-56 gap-8">
                <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                        <h2>{props.climaAPI.city}</h2>
                        <img src={props.climaAPI.pais} alt="" className="w-6" />
                    </div>
                    <img src={props.climaAPI.imgClima} alt="" className="w-48"/>
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
                        <abbr title="umidade">{props.climaAPI.umidade}%<img src="./assets/umidade.png" alt="" /></abbr>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1"><img src={props.climaAPI.imgClima} alt="" /><p>{props.climaAPI.veloVento}Km/h</p></div>
                        <p style={{transform: `rotateZ(${Number(props.climaAPI.dereVento)}deg)`}}><img src="../src/imagens/direcao.png" alt="Direção do vento" /></p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex"><img src="../src/imagens/alvorecer.png" alt="" /> {props.climaAPI.nascerSol}</div>
                        <div className="flex">
                            <div className="flex">{props.climaAPI.PorSol}<img src="./src/imagens/por-do-sol.png" alt="" /></div>
                        </div>
                    </div>
                    <a href="https://openweathermap.org/" target="_blank" className="text-end underline text-gray-400">fonte: Openweather</a>
                </div>
            </div>
        </section>
    )
}