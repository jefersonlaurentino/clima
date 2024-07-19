import "./global.css"
import Cabecalho from "./containers/cabecalho"
import { FaSearch } from "react-icons/fa";
import Card from "./containers/Card";

const api = async()=>{
  return await (
      fetch("https://api.openweathermap.org/data/2.5/weather?lat=-6,107&lon=-35,709&APPID=46a95d36faa14230ee1af68172883766&lang=pt_br&units=metric")
      .then(res => res.json())
      .catch(err => console.log(err))
  )
}

  let cit = await api()
  console.log(cit);

export function App() {

  return (
    <>
      <Cabecalho>
        <FaSearch />
      </Cabecalho>
      <main className="flex justify-center items-center">
        <Card api={cit}/>
      </main>
    </>
  )
}
