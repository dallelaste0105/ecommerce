export default function CampaignCard({
    name,
    description
}:{
    name:string,
    description:string
}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}
