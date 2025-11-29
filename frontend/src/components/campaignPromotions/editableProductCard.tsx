import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from "../../api";

export default function EditableProductCard({
    name,
    price,
    url
}:{
    name:string,
    price:number,
    url:string
}) {
    const[discount, setDiscount] = useState(0);

    async function addDiscount({value, productName}:{value:number, productName:string}) {
        try{
            const res = api.post("/promotion/adddiscount",
            {value},
            {withCredentials:true}
            )
        }
        
        catch (err:any) {
            if (err.response) {
                window.alert(err.response.data.message);
            } else {
                window.alert("Erro inesperado ao criar produto");
            }
        }
        }

    
        return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <img 
                src={url} 
                alt="Imagem do produto" 
                style={{
                    width: "15vw",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
            <textarea value={discount} onChange={(e)=>setDiscount}>% do desconto</textarea>
            <button onClick={()=>addDiscount({value:discount, productName:name})}>Adicionar desconto</button>
        </div>
    );
    }

    