import { useState } from "react";
import api from "../../../api";

export default function UserSearchToolComponent() {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState<any[]>([]);

    async function searchItens() {
        try {
            const res = await api.post("/product/search", { search }, {withCredentials:true});
            setResults(res.data.message); // <-- agora salva os itens aqui
        } catch (err: any) {
            if (err.response) {
                window.alert(err.response.data.message);
            } else {
                window.alert("Erro inesperado");
            }
        }
    }

    return (
        <div>
            <textarea 
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}
            ></textarea>

            <button onClick={searchItens}>Pesquisar</button>

            <div style={{marginTop: 20}}>
                {results.length === 0 && <p>Nenhum item encontrado</p>}

                {results.map(item => (
                    <div key={item.id}>
                        <strong>{item.name}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}