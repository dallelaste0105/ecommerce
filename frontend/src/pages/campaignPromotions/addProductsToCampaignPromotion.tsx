import api from "../../api";
import { useState, useEffect } from "react";
import EditableProductCard from "../../components/campaignPromotions/editableProductCard";

export default function AddProductsToCampaign() {

    const [products, setProducts] = useState<any[]>([]);

    async function getProducts() {
        try {
            const res = await api.get("/product/getproducts",
                { withCredentials: true }
            );
            setProducts(res.data.message); 
        }
        catch (err: any) {
            setProducts([]);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            {products.map((p) => (
                <EditableProductCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    url={p.imageUrl}
                />
            ))}
        </div>
    );
}