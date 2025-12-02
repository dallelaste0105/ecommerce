import { useParams } from "react-router-dom";
import UserBuyProductsComponent from "../../components/products/user/userBuyProductsComponent";
import UserProductComponent from "../../components/products/user/userProductComponent";

export default function ProductDetailsPage() {
    const { name } = useParams();

    return (
        <span>
            <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                Detalhes de {name}
            </h1>

            
            <p>Nome: {name}</p>
        </span>
    );
}
