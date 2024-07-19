export default function Cabecalho({children}) {
    return (
        <header className="flex justify-center p-3">
            <div className="bg-white rounded-2xl flex gap-2 items-center overflow-hidden px-2 p-1">
                <input type="text" className="outline-none"/>
                <button type="submit">
                    { children }
                </button>
            </div>
        </header>
    )
}