import { useState } from "react";
import api from "../../api"

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState(0);
    const [url, setUrl] = useState("");

    async function createProduct({name, description, value, url}: {name:string, description:string, value:number, url:string}) {
        try {
            const res = await api.post("/product/create", 
                { name, description, value, url },
                { withCredentials: true }
            );
            window.alert(res.data.message);
        } catch (err:any) {
            if (err.response) {
                window.alert(err.response.data.message);
            } else {
                window.alert("Erro inesperado ao criar produto");
            }
        }
    }

    return (
        <div>
            <h1>Adicione um novo produto!</h1>
            <textarea
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
            />
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="Valor"
            />
            <textarea
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL da imagem"
            />
            <button onClick={() => createProduct({name, description, value, url})}>
                Criar Produto
            </button>
        </div>
    );
}