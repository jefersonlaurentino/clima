import { useContext, useEffect, useState } from "react"
import Card_cidade from "../Card_cidade"
import CityAPI from "../context/CityApi";

export default function Cidades() {
    const { cityApi } = useContext(CityAPI)
    const [cidade , setCidade] =useState([])

    const api = async(city) =>{
        return await (
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=46a95d36faa14230ee1af68172883766`)
            .then(res => res.json())
            .catch(erro =>console.log(erro))
        )
    }

    const consumirApi = async()=>{
        setCidade(await api(cityApi))
    }

    useEffect(()=>{
        if( cityApi != ""){
            consumirApi()
        } 
    },[cityApi])

    useEffect(()=>{
        if (cidade.length == 0) {
            document.querySelector(".info_city").innerHTML = "ERRO! Cidade Não Encontrada."
            document.querySelector(".cards_city").classList.add("hidden") 
        } 
    },[cidade])

    // adicionada a função "keyCard" para evitar o erro na key do react dos campo de selecionar a cidade que vem repetidas da API. ex: cidade parís.
    function keyCard(max){
        if (max != undefined) {
            return (Number(max)* Math.random()) * 10
        } else {
            return Math.round() * 10
        }
    }
    
    return (
        <section className="cards_city absolute w-full z-10 flex flex-col items-center hidden">
            <div className="flex flex-col gap-2 backdrop-blur-3xl p-2 rounded-xl shadow-lg">
                {cidade.map((e)=><Card_cidade key={keyCard(e.lat)} cidade={e}/>)}
            </div>
        </section>
    )
}