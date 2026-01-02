import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShowProductDetailsConnection } from "../../connections/productConnection";
import { AddProductCartConnection } from "../../connections/productConnection";
import { PublicProductRateConnection } from "../../connections/productConnection";
import { GetProductComments } from "../../containers/productContainers/commentsContainer";

export default function ProductDatailsScreen() {
  const { productId } = useParams<{ productId: string }>();
  const [details, setDetails] = useState<any>({});
  const [comment, setComment] = useState("");

  useEffect(() => {
      //faz uma requisição para pegar os detalhes
      async function showProductDetails() {
          const res = await ShowProductDetailsConnection({ body: {"productId":productId} });

          if (res && res.ok) {
            setDetails(res.msg);
        }
      }
      showProductDetails();
  }, []);

  async function handleSendComment() {
      //envia comentário para o produto
      const res = await PublicProductRateConnection({
          body: { "productId": productId, "comment": comment }
      });
      
      if(res && res.ok) {
          setComment("");
          window.location.reload();
      } else {
          alert("Erro ao enviar comentário");
      }
  }

  return(
    //retorna o item de carrinho, área para criar comentário e área de comentário
    <>
    <h1>{details.name}</h1>
    <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-adicionar-ao-carrinho-icon-svg-download-png-1794993.png"
          onClick={(e) => {
            e.preventDefault();
            AddProductCartConnection({ body: { "productId": productId } });
          }}
          style={{cursor: 'pointer'}}
    />
    
    <br/><br/>
    
    <textarea 
        value={comment} 
        onChange={(e)=>{setComment(e.target.value)}} 
        placeholder="Escreva seu comentário..."
    />
    <button onClick={handleSendComment}>Adicionar comentário</button>

    <hr/>
    <h3>Comentários:</h3>
    
    <GetProductComments productId={productId} />
    
    </>
  )
}