import imgSensacao from "../../../src/imagens/termico.png"
import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
import nascerSol from "../../../src/imagens/alvorecer.png"
import porSol from "../../../src/imagens/por-do-sol.png"
import direcao from "../../../src/imagens/direcao.png"

export default function Card_phone (props) {
    return (
        <section className="cardPhone bg-white card_estendi hidden p-1 rounded-lg w-56 h-[300px]">
            <article className="flex flex-col h-full justify-between">
                <div className="flex justify-between">
                    <div className="info_campo">
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
                        <img src={imgSensacao} alt="" />
                        <div className="info_campo">
                            <h3>Sensação</h3>
                            <p className="ml-1">{props.climaAPI.sensacao}</p>
                        </div>
                    </div>
                    <div className="campo_info">
                        <div className="info_campo text-right">
                            <h3>Umidade</h3>
                            <p>{props.climaAPI.umidade}</p>
                        </div>
                        <img src={umidade} alt="" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="campo_info">
                        <img src={vento} alt="" />
                        <div className="info_campo">
                            <h3>Vel. vento</h3>
                            <p>{props.climaAPI.veloVento}</p>
                        </div>
                    </div>
                    <div className="info_campo items-center">
                        <h3>Dir. vento</h3>
                        <img src={direcao} alt="" style={{transform: `rotateZ(${props.climaAPI.dereVento}deg)`, width: '1.5rem'}}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="info_campo">
                        <h3>Nascer do sol</h3>
                        <div className="campo_info">
                            <img src={nascerSol} alt="" />
                            <p>{props.climaAPI.nascerSol}</p>
                        </div>
                    </div>
                    <div className="info_campo">
                        <h3>Pro do sol</h3>
                        <div className="campo_info">
                            <img src={porSol} alt="" />
                            <p>{props.climaAPI.PorSol}</p>
                        </div>
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