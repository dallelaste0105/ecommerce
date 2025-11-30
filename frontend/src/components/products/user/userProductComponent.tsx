import { Link } from "react-router-dom";

export default function UserProductComponent({name}:{name:string}) {
    return <div>
        <Link to={`/productdetailspage/${name}`}>
            <p>{name}</p>
        </Link>
        
    </div>
}