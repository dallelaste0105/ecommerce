export default function ProductCard({
    name,
    price
}:{
    name:string,
    price:number
}) {
    return <div>
        <h1>{name}</h1>
        <p>{price}</p>    
    </div>
}