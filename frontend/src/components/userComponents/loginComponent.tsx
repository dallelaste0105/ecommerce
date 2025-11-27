import { useState } from "react"

export default function LoginComponent(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    async function login({name, password}:{name:string, password:string}) {
        const body = {
            "name":name,
            "password":password
        }
        try{
        const loginRes = await fetch(
            `http://localhost:3000/credential/login`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:
                    JSON.stringify(body)
            }
            )
            window.alert(loginRes.json)
        }
        catch{
            window.alert("Erro grave")
        }
    }

    return(
        <div>
            <textarea value={name} onChange={(e)=>setName(e.target.value)}></textarea>
            <textarea value={password} onChange={(e)=>setPassword(e.target.value)}></textarea>
            <button onClick={() => login({name, password})}>Login</button>
        </div>
    )
}