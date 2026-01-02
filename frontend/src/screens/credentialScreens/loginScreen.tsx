import { useState } from "react";
import { LoginConnection } from "../../connections/credentialConnections";

export default function LoginScreen() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <textarea value={name} onChange={(e) => setName(e.target.value)}></textarea>
            <textarea value={password} onChange={(e) => setPassword(e.target.value)}></textarea>
            <button onClick={() => LoginConnection({ body: { name, password} })}>Entrar</button>
        </>
    )
}