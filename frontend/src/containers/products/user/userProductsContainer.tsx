import { useState, useEffect } from "react";
import api from "../../../api";
import UserProductComponent from "../../../components/products/user/userProductComponent";

export default function ProductsContainer() {

    const [campaignProducts, setCampaignProducts] = useState<any[]>([]);

    async function getProducts() {
        try {
            const res = await api.get("/product/getproducts",{withCredentials:true})
            setCampaignProducts(res.data.message)
        } catch (err:any) {
            if (err.response) {
                window.alert(err.response.data.message);
            } else {
                window.alert("Erro inesperado");
            }
        }
    }

    useEffect(() => {
    getProducts();
}, []);


    return <div>
        {campaignProducts.map((p)=> (
            <UserProductComponent
                name={p.name}
            />
        ))}
    </div>
}