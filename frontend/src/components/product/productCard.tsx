import { Link } from 'react-router-dom';

export default function ProductCard({
    name,
    price,
    url
}:{
    name:string,
    price:number,
    url:string
}) {
    return (
        <div>
            <Link to="/addproductstocampaign">

            <h1>{name}</h1>
            <p>{price}</p>
            <img 
                src={url} 
                alt="Imagem do produto" 
                style={{
                    width: "15vw",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
            </Link>
        </div>
    );
}
