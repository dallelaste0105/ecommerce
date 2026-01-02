import { useState } from "react";
import { SignupConnection } from "../../connections/credentialConnections";

export default function SignupScreen() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const customer = "customer";
    const seller = "seller";

    return (
        <>
            <textarea value={name} onChange={(e) => setName(e.target.value)}></textarea>
            <textarea value={password} onChange={(e) => setPassword(e.target.value)}></textarea>
            <button onClick={() => SignupConnection({ body: { name, password, customer } })}>Cadastrar como cliente</button>
            <button onClick={() => SignupConnection({ body: { name, password, seller } })}>Cadastrar como vendedor</button>
        </>
    )
}