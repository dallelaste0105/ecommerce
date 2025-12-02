export default function UserBuyProductsComponent({products}:{products:string[]}) {
    return <div>
        <button>Comprar</button>
        <p>{products}</p>
    </div>
}