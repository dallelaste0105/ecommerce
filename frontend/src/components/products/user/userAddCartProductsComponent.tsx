import api from "../../../api";

export default function UserAddCartProductsComponent({ product }: { product: string }) {

    async function addCartProducts(product:string) {
        try {
            const res = await api.post("", {product}, {withCredentials:true})
            window.alert("Deu boa")
        } catch (error) {
            window.alert("Não deu boa")
        }
    }

    return (
        <button 
            style={{
                background: "white",
                border: "1px solid #ccc",
                padding: "6px",
                borderRadius: "6px",
                cursor: "pointer"
            }}
            onClick={()=> addCartProducts(product)}
        >
            <img 
                src="https://imgs.search.brave.com/vk0i6oO4o2bjetm6JTlRPVRr7Jv5GLYL8vKokHm2Ijc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmV0b3Jlcy1wcmVt/aXVtL2ljb25lLWRv/LWNhcnJpbmhvLWRl/LWNvbXByYXNfMTA3/NjYxMC0xODM2My5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA"
                alt="carrinho"
                style={{ width: "20px", height: "20px" }}
            />
        </button>
    );
}
