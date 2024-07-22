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
        <header className="flex justify-center p-3">
            <form 
                onSubmit={evt => click(evt)} 
                className="bg-white rounded-2xl flex items-center overflow-hidden">
                <input 
                    type="text" 
                    value={inputCity} 
                    onChange={evt => setInputCity(evt.target.value)} 
                    className="outline-none px-2 py-1"/>
                <button 
                    className="h-full px-2" 
                    type="submit">
                    { children }
                </button>
            </form>
        </header>
    )
}