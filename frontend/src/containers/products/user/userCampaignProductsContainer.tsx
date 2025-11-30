import { useState, useEffect } from "react";
import api from "../../../api";
import ProductComponent from "../../../components/products/user/userProductComponent";

export default function CampaignProductsContainer() {

    const [campaignProducts, setCampaignProducts] = useState<any[]>([]);

    async function getCampaignProducts() {
        try {
            const res = await api.get("/promotion/getcampaigns",{withCredentials:true})
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
    getCampaignProducts();
}, []);


    return <div>
        {campaignProducts.map((p)=> (
            <ProductComponent
                key={p.id}
                name={p.name}
            />
        ))}
    </div>
}