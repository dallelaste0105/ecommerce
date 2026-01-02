import { useEffect, useState } from "react"; 
import { CommentComponent } from "../../components/productComponents/commentComponent";
import { GetProductCommentsConnection } from "../../connections/productConnection";

export function GetProductComments({productId}:{productId:any}) {
    const [comments, setComments] = useState<any[]>([]);

    //apenas chama a função do connection que retorna todos os comentários
    //mostra eles por conta do componente de comentário que é criado para cada item da lista
    
    useEffect(() => {
            async function fetchComments() {
                if (!productId) return; 

                const res = await GetProductCommentsConnection({ body: {"productId": productId} });
    
                if (res && res.ok) {
                    setComments(res.msg);
                }
            }
            fetchComments();
        }, [productId]); 

    return (
        <>
            {comments.map((item: any, index: any) => (
                <CommentComponent 
                    key={index} 
                    comment={item.comment || item["comment"]} 
                />
            ))}
            
            {comments.length === 0 && <p>Seja o primeiro a comentar!</p>}
        </>
    );
}