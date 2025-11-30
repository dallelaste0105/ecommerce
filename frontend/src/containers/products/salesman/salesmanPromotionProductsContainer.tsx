import { useState, useEffect } from "react";
import api from "../../../api";
import ProductComponent from "../../../components/products/salesman/salesmanProductComponent";

export default function PromotionProductsContainer() {

    const [campaignProducts, setCampaignProducts] = useState<any[]>([]);

    async function getPromotionProducts() {
        try {
            const res = await api.get("/promotion/getpromotionproducts",{withCredentials:true})
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
    getPromotionProducts();
}, []);


    return <div>
        {campaignProducts.map((p)=> (
            <ProductComponent
                name={p.name}
            />
        ))}
    </div>
}