import { Link } from 'react-router-dom';

export default function CampaignCard({
    name,
    description
}:{
    name:string,
    description:string
}) {
    return (
        <div>
            <Link to="/addproductstocampaign">
            <h1>{name}</h1>
            <p>{description}</p>
            </Link>
        </div>
    );
}
