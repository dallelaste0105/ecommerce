import { useState } from "react"
import { AddProductPromotion, RemoveProductPromotion } from "../../connections/storeConnection";

export function CanBePromotionalProductsComponent({productId, productName, productPrice}:{productId:number, productName:string, productPrice:number}) {
    
    const [promotion, setPromotion] = useState(0);
    
    return(
        <>
        <h1>{productName}</h1>
        <textarea value={promotion} onChange={(e)=>{setPromotion(Number(e.target.value))}}></textarea>
        <button onClick={()=>AddProductPromotion({body: {"productId":productId, "percentagePromotion":promotion}})}>Adicionar promoção</button>
        <button onClick={()=>RemoveProductPromotion({body: {"productId":productId}})}>Retirar promoção</button>
        </>
    )
}