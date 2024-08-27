import { IoCloseSharp } from "react-icons/io5";

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
        document.querySelector(".aside_dicas").classList.add('left-full')
    }

    return (
        <>
            <aside className="aside_dicas z-20 w-10/12 md:w-1/3 h-full absolute top-0 left-full bg-black text-white p-4 duration-150">
                <button onClick={()=>{
                    fecharDicas()
                    dicasOpen()
                    }}><IoCloseSharp className="text-2xl"/></button>
                <div>
                    <details className="border rounded-lg my-4 relative overflow-hidden" >
                        <summary onClick={(evt)=>dicasOpen(evt.target)} className="flex items-center list-none py-1 px-4 after:content-['^'] after:absolute after:right-3">Pesquisei uma cidade mas me mostra outra?</summary>
                        <p className="border-t bg-neutral-100 text-black p-2">A API pode exibir o nome de um bairro ou de uma cidade próxima no lugar da cidade que você pesquisou. No entanto, não se preocupe, as informações do clima são referentes à cidade que você escolheu. Você pode conferir a localização exata clicando em 'Mais Informações', onde a latitude e a longitude serão exibidas. Com esses dados, você pode verificar a localização precisa usando um site ou aplicativo de mapas.</p>
                    </details>
                    <details className="border rounded-lg my-4 relative overflow-hidden" >
                        <summary onClick={(evt)=>dicasOpen(evt.target)} className="flex items-center list-none py-1 px-4 after:content-['^'] after:absolute after:right-3">Mais dicas</summary>
                        <p className="border-t bg-neutral-100 text-black p-2">Estamos trabalhando em mais dicas para ajudar você a utilizar nosso site de clima de forma ainda mais eficaz. Fique atento, em breve teremos mais orientações para você!</p>
                    </details>
                </div>
            </aside>
        </>
    )
}