import api from "../../api";
import { useState, useEffect } from "react";

export default function ViewProducts() {

    const [response, setResponse] = useState("");

    async function getproducts() {
        try {
            const res = await api.get("/product/getproducts",
                { withCredentials: true }
            );
            setResponse(res.data.message);
        }
        catch (err: any) {
            if (err.response) {
                setResponse(err.response.data.message);
            } else {
                setResponse("Erro inesperado ao criar produto");
            }
        }
    }

    useEffect(() => {
        getproducts();
    }, []);

    return (
        <div>
            <p>{JSON.stringify(response)}</p>
        </div>
    );
}
