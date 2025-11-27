import { useState } from "react";
import api from "../../api";

export default function LoginComponent() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    async function login({ name, password }: { name: string, password: string }) {
        try {
            const res = await api.post("/credential/login", {
                name,
                password
            });

            window.alert(res.data["message"]);
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
