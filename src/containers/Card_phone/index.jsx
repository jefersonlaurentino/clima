import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
import nascerSol from "../../../src/imagens/alvorecer.png"
import porSol from "../../../src/imagens/por-do-sol.png"
import direcao from "../../../src/imagens/direcao.png"

export default function Card_phone (props) {
    return (
        <section className="cardPhone bg-white card_estendi hidden p-2 rounded-lg w-56 h-[300px]">
            <article className="flex flex-col h-full justify-between">
                <div className="flex justify-between">
                    <div>
                        <p>Lat: {props.climaAPI.lat}</p>
                    </div>
                    <div>
                        <p>Lon: {props.climaAPI.lon}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>Sensação:</h3>
                        <p>{props.climaAPI.sensacao}</p>
                    </div>
                    <div>
                        <h3>Umidade:</h3>
                        <p className="flex gap-1">{props.climaAPI.umidade}<img src={umidade} alt="" /></p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>Vento:</h3>
                        <p className="flex gap-1"><img src={vento} alt="" />{props.climaAPI.veloVento}</p>
                    </div>
                    <div>
                        <h3>Direção:</h3>
                        <p><img src={direcao} alt="" style={{transform: `rotateZ(${props.climaAPI.dereVento}deg)`}}/></p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>Nascer sol:</h3>
                        <p className="flex gap-1"><img src={nascerSol} alt="" />{props.climaAPI.nascerSol}</p>
                    </div>
                    <div>
                        <h3>Por Sol:</h3>
                        <p className="flex gap-1"><img src={porSol} alt="" />{props.climaAPI.PorSol}</p>
                    </div>
                </div>
                <div className="flex justify-between underline">
                    <button onClick={props.click}>voltar</button>
                    <a href="https://openweathermap.org/" target="_blank" className="text-gray-400">fonte: Openweather</a>
                </div>
            </article>
        </section>
    )
}