import gps from "../../imagens/sinal-de-localizacao.png"
import { useContext, useState } from "react"
import cityAPI from "../context/CityApi";

export default function Cabecalho({children}) {
    const { setCityApi } = useContext(cityAPI)
    
    const [ inputCity , setInputCity ] = useState("")

    const click = (click) =>{
        click.preventDefault()
        setCityApi(inputCity)
        setInputCity("")
    }

    return (
        <header className="flex flex-col items-center py-2 min-h-[72px]">
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
            <p></p>
        </header>
    )
}