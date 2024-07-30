export default function Card(props) {
    return (
        <section className="relative card bg-white w-56 h-[300px] p-2 flex flex-col gap-5 rounded-xl">
            <div className="logo flex flex-col items-center">
                <img src={props.climaAPI.pais} alt="" className="w-6"/>
                <p>{props.climaAPI.city}</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                    <img src={`../src/imagens/${props.climaAPI.imgClima}.png`} alt={props.climaAPI.clima} className=""/>
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
                    <abbr title="Velocidade do vento"><img src="../src/imagens/vento.png" alt="" /> <span>{props.climaAPI.veloVento}</span>/km</abbr>
                    <p>Direção: <span>{props.climaAPI.dereVento}</span></p>
                </div>
            </article>
            <button className="absolute bottom-1 underline" onClick={props.click}>Mais informações</button>
        </section>
    )
}