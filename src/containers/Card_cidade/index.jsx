import CityLocation from "../context/CityLocation";
import { useContext } from "react";

export default function Card_cidade (dados){
    const { setCityLocation } = useContext(CityLocation)
    
    const ok = (dados) =>{
        setCityLocation([dados.cidade.lat,dados.cidade.lon])
        document.querySelector(".cards_city").classList.add("hidden")
    }
    return (
        <div className="p-2 bg-white rounded-xl shadow-md hover:scale-[1.03] hover:cursor-pointer duration-300 flex items-center gap-2 w-72 h-16" onClick={()=>ok(dados)}>
            <div className="w-5/6">
                <h5>{dados.cidade.name} {(dados.cidade.state != undefined)? "- "+ dados.cidade.state:""} , {dados.cidade.country}</h5>
            </div>
            <div className="w-2/12 flex justify-center">
                <img src={`https://openweathermap.org/images/flags/${(dados.cidade.country).toLowerCase()}.png`} alt="" />
            </div>
        </div>
    )
}