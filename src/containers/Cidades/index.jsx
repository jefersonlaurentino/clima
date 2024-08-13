import { useContext, useEffect, useState } from "react"
import CityLocation from "../context/CityLocation"
import Card_cidade from "../Card_cidade"
import CityAPI from "../context/CityApi";

export default function Cidades() {
    const {cityLocation , setCityLocation} = useContext(CityLocation)
    const { cityApi } = useContext(CityAPI)
    const [cidade , setCidade] =useState([])

    const api = async(city) =>{
        return await (
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=46a95d36faa14230ee1af68172883766`)
            .then(res => res.json())
            .catch(error => console.log(error))
        )
    }

    const tes = async()=>{
        setCidade(await api(cityApi))
    }

    useEffect(()=>{
        if( cityApi != ""){
            tes()
        }
    },[cityApi])

    return (
        <section className="cards_city absolute z-10 w-full flex flex-col items-center hidden">
            <div className="flex flex-col gap-2 backdrop-blur-3xl p-2 rounded-xl shadow-lg">
                {cidade.map((e)=><Card_cidade key={e.lat} cidade={e}/>)}
            </div>
        </section>
    )
}