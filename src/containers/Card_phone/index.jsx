import umidade from "../../../src/imagens/umidade.png"
import vento from "../../../src/imagens/vento.png"
import nascerSol from "../../../src/imagens/alvorecer.png"
import porSol from "../../../src/imagens/por-do-sol.png"
import direcao from "../../../src/imagens/direcao.png"

export default function Card_phone (props) {
    return (
        <section className="cardPhone card_estendi hidden bg-white p-2 rounded-lg w-56 h-[300px]">
            <article className="flex flex-col h-full justify-between">
                <div className="flex justify-between">
                    <div>
                        <p>Lat: -23.5475</p>
                    </div>
                    <div>
                        <p>Lon: -46.6361</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>Sensação:</h3>
                        <p>27</p>
                    </div>
                    <div>
                        <h3>Umidade:</h3>
                        <p className="flex gap-1">12%<img src={umidade} alt="" /></p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>Vento:</h3>
                        <p className="flex gap-1"><img src={vento} alt="" />12km/h</p>
                    </div>
                    <div>
                        <h3>Direção:</h3>
                        <p><img src={direcao} alt="" /></p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3>Nascer sol:</h3>
                        <p className="flex gap-1"><img src={nascerSol} alt="" />05:30</p>
                    </div>
                    <div>
                        <h3>Por Sol:</h3>
                        <p className="flex gap-1"><img src={porSol} alt="" />17:30</p>
                    </div>
                </div>
                <div className="text-right">
                    <a href="https://openweathermap.org/" target="_blank" className="underline text-gray-400">fonte: Openweather</a>
                    <button onClick={props.click}>voltar</button>
                </div>
            </article>
        </section>
    )
}