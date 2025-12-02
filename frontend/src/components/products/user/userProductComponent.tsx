import { Link } from "react-router-dom";
import UserAddCartProductsComponent from "./userAddCartProductsComponent";

export default function UserProductComponent({ name }: { name: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link to={`/productdetailspage/${name}`}>
                <p style={{ margin: 0 }}>{name}</p>
            </Link>

            <span>
                <UserAddCartProductsComponent product={name}></UserAddCartProductsComponent>
            </span>
        </div>
    );
}
