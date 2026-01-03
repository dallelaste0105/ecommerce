import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CanBePromotionalProductsContainer } from "../../containers/storeContainers/canBePromotionalProductsContainer";

export default function CreatePromotionScreen() {
    const [textAreaSearchedWord, setTextAreaSearchedWord] = useState("");
    const [searchParams] = useSearchParams();

    //tenta pegar estes itens abaixo direto da Url (não obrigatórios, só para pesquisa)
    const navigate = useNavigate();
    const searchedWord = searchParams.get("word") ?? "";
    const bySearch = searchParams.get("bySearch") === "true";

    //retorna todos os produtos do vendedor com a opção de adicionar % de desconto em cada um separadamente
    return(
        <>
        <textarea value={textAreaSearchedWord} onChange={(e)=>{setTextAreaSearchedWord(e.target.value)}}></textarea>
        <button onClick={()=>{navigate(`/createpromotionscreen?bySearch=true&word=${encodeURIComponent(textAreaSearchedWord)}`);}}></button>
        <CanBePromotionalProductsContainer isSearch={bySearch} searchedWord={searchedWord}/>
        </>
    )
}