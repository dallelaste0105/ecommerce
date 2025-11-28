import api from "../../api";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product/productCard";

export default function ViewProducts() {

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
                <ProductCard
                    key={p.id}
                    name={p.name}
                    price={p.price}
                />
            ))}
        </div>
    );
}
