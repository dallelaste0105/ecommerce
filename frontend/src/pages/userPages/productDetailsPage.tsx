import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
    const { name } = useParams();

    return (
        <div>
            <h1>Detalhes do Produto</h1>
            <p>Nome: {name}</p>
        </div>
    );
}
