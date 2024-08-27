export default function ButtonDicas () {
    return (
        <>    
            <div 
                className="bg-black text-white rounded-xl px-3 cursor-pointer" 
                onClick={()=>{
                    document.querySelector(".aside_dicas").classList.remove("left-full")
                    document.querySelector(".aside_dicas").classList.add("right-0")
                }}>Ajuda
            </div>
        </>
    )
}
