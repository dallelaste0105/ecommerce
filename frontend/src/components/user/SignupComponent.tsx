import { useState } from "react";

export default function SignupComponent(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("user");
    const [response, setResponse] = useState("");

    async function sendRequest({
        name,
        email,
        password,
        userType
    }:{
        name:string,
        email:string,
        password:string,
        userType:string
    }) {
        let body = {
            "name":name,
            "email":email,
            "password":password,
            "userType":userType
        }
        try{
            const res = await fetch(
            `http://localhost:3000/credential/signup`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:
                    JSON.stringify(body)
                
            }
            )
            const APIresponse = await res.json()
            setResponse(APIresponse["message"])
        }
        catch{
            window.alert("Erro ao cadastrar")
        }
        }
        return <div>
        <textarea value={name} onChange={(e)=>setName(e.target.value)}></textarea>
        <textarea value={email} onChange={(e)=>setEmail(e.target.value)}></textarea>
        <textarea value={password} onChange={(e)=>setPassword(e.target.value)}></textarea>
        <select value={userType} onChange={(e)=>setUserType(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="salesman">Vendedor</option>
        </select>
        <button onClick={() => sendRequest({ name, email, password, userType })}>Signup</button>
        <p>{response}</p>
        </div>
    }
