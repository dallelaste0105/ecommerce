import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function SearchProductComponent() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch(word: string) {
        //função que carrega a página de itens com seus parâmetros de URL
        navigate(`/store?bySearch=true&word=${encodeURIComponent(word)}`);
    }


    return (
        //quando você clica em pesquisar, a função acima é acionada
        <>
        <textarea value={search} onChange={(e)=>{setSearch(e.target.value)}}></textarea>
        <button onClick={()=>{handleSearch(search)}}>Pesquisar</button>
        </>
    )
}