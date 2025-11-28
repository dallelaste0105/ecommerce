import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login({ name, password }: { name: string, password: string }) {
        try {
            const res = await api.post("/credential/login", {
                name,
                password
            });

            if (res.data["message"] == "Usuário fez login com sucesso"){
                navigate("/createproduct");
            }
            else{
                navigate("/createproduct");
            }
        } catch (err: any) {
        if (err.response) {
            window.alert(err.response.data.message);
        } else {
            // erro inesperado (sem resposta do servidor)
            window.alert("Erro inesperado no login");
        }}
    }

    return (
        <div>
            <textarea value={name} onChange={(e) => setName(e.target.value)}></textarea>
            <textarea value={password} onChange={(e) => setPassword(e.target.value)}></textarea>
            <button onClick={() => login({ name, password })}>Login</button>
        </div>
    );
}
