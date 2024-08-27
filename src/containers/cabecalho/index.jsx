import gps from "../../imagens/sinal-de-localizacao.png"
import { useContext, useState } from "react"
import cityAPI from "../context/CityApi";
import ButtonDica from "../ButtonDicas";

export default function Cabecalho({children}) {
    const { setCityApi } = useContext(cityAPI)
    
    const [ inputCity , setInputCity ] = useState("")

    const click = (click) =>{
        click.preventDefault()
        setCityApi(inputCity)
        document.querySelector(".cards_city").classList.remove("hidden")
        document.querySelector(".info_city").innerHTML = ""
        setInputCity("")
    }

    
    return (
        <header className="flex flex-col items-center py-2 min-h-[72px] relative">
            <form 
                onSubmit={evt => click(evt)} 
                className="bg-white rounded-2xl flex items-center overflow-hidden pl-1">
                <img src={gps} alt=""/>
                <input 
                    type="text" 
                    value={inputCity} 
                    placeholder="Digite o nome da cidade"
                    onChange={evt => setInputCity(evt.target.value)} 
                    className="outline-none pl-1"/>
                <button 
                    className="p-2" 
                    type="submit">
                    { children }
                </button>
            </form>
            <p className="info_city drop-shadow-2xl font-bold"></p>
            <div className="absolute right-10 hidden sm:block">
                <ButtonDica/>
            </div>
        </header>
    )
}