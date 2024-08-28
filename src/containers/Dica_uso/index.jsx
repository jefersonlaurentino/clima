import { IoCloseSharp } from "react-icons/io5";
import respostas from "../../../database/dicasAjuda";

export default function Dicas_uso(){

    const dicasOpen = (evt) =>{
        let click = evt
        let dicas = document.querySelectorAll("summary")
        dicas.forEach((e)=>{
            if (e != click) {
                e.parentNode.removeAttribute("open")
            }
        })
    }

    const fecharDicas = () =>{
        document.querySelector(".aside_dicas").classList.remove('right-0')
        document.querySelector(".aside_dicas").classList.add('-right-[429px]')
        document.querySelector(".aside_dicas").classList.add('opacity-0')
    }

    const respostaDicas = respostas.resposta
    
    return (
        <>
            <aside className="aside_dicas z-20 w-10/12 max-w-[429px] h-full fixed top-0 -right-[429px] bg-black text-white p-4 duration-300">
                <div className="text-center relative">
                    <button onClick={()=>{
                        fecharDicas()
                        dicasOpen()
                        }}
                        className="absolute left-0"
                    ><IoCloseSharp className="text-2xl"/>
                    </button>
                    <h4>Perguntas frequentes</h4>
                </div>
                <div className="h-full py-3 overflow-x-hidden">
                    {respostaDicas.map((e)=><details key={e.titulo} className="border rounded-lg my-4 relative overflow-hidden">
                        <summary onClick={(evt)=>dicasOpen(evt.target)} className="flex items-center py-1 px-4 after:content-['➤'] after:absolute after:right-3">{e.titulo}</summary>
                        <p className="border-t bg-neutral-100 text-black p-2">{e.mensagem}</p>
                    </details>)}
                </div>
            </aside>
        </>
    )
}