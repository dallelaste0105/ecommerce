import { Link } from "react-router-dom";
import { AddProductCartConnection } from "../../connections/productConnection";

export function StoreProductComponent(
  { id, name, price }: { id: number; name: string; price: number }
) {
  return (
    //componente que representa cada item, indo para a página de detalhes do mesmo caso tenha seu componente clicado
    //ele navega para a página de detalhes correta pelo seu Id que é um parâmetro de URL
    //caso o botão de adicionar ao carrinho for apertado ele adiciona o item pelo seu Id
    <>
    <Link to={`/productdetails/${id}`}>
      <div>
        <h1>{name}</h1>
        <p>{price}</p>  
      </div>
      </Link>
      <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-adicionar-ao-carrinho-icon-svg-download-png-1794993.png"
          onClick={(e) => {
            e.preventDefault();
            AddProductCartConnection({ body: { productId: id } });
          }}>
        </img>
    </> 
  )
}
