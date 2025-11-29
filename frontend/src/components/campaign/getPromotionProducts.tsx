import api from "../../api";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product/productCard";

export default function GetPromotionProducts() {
    const [campaigns, setCampaigns] = useState<any[]>([]);

    async function getPromotionProducts() {
        try {
            const res = await api.get("/promotion/getpromotionproducts",
                { withCredentials: true }
            );
            setCampaigns(res.data.message); 
        }
        catch (err: any) {
            setCampaigns([]);
        }
    }

    useEffect(() => {
        getPromotionProducts();
    }, []);

    return (
        <div>
            {campaigns.map((p) => (
                <ProductCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    url={p.imageUrl}
                />
            ))}
        </div>
    );
}