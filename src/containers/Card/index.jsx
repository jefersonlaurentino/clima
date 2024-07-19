

export default function Card(props) {
console.log(props);
    return (
        <section className="bg-white w-80 p-2 flex flex-col gap-2 rounded-xl">
            <div className="logo flex flex-col items-center">
                <img src="" alt="erro" className="bg-black h-10 w-10 "/>
                <p>{props.api.name}-{props.api.sys.country}</p>
            </div>
            <div className="flex justify-center gap-4">
                <img src="" alt="" className="bg-black h-40 w-40"/>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <h3 className="text-3xl font-semibold">{props.api.main.temp}</h3>
                    </div>
                    <div className="flex gap-1">
                        <h1 className="">{props.api.main.temp_min}</h1>
                        <p>/</p>
                        <h2 className="">{props.api.main.temp_max}</h2>
                    </div>
                </div>
            </div>
            <article>
                <div className="flex justify-between">
                    <p>Censação: <span>30</span></p>
                    <p>Umidade: <span>30</span></p>
                </div>
                <div className="flex justify-between">
                    <p>Velocidade: <span>20</span>/km</p>
                    <p>Direção: <span>20</span></p>
                </div>
                <button className="underline mt-2">Mais informações</button>
            </article>
        </section>
    )
}