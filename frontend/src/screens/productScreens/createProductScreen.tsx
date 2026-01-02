import { useState } from "react"
import { CreateProductConnection } from "../../connections/productConnection";

export default function CreateProductScreen() {

    const[name, setName] = useState("");
    const[price, setPrice] = useState("");

    return(<>
        <textarea value={name} onChange={(e)=>{setName(e.target.value)}}></textarea>
        <textarea value={price} onChange={(e)=>{setPrice(e.target.value)}}></textarea>
        <button onClick={()=>{CreateProductConnection({body:{name, price}})}}></button>
        </>
    )
}