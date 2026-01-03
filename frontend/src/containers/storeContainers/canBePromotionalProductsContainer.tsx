import { useEffect, useState } from "react"
import { SellerGetStoreSearchedProductsConnection } from "../../connections/productConnection"
import { SellerGetStoreProductsConnection } from "../../connections/storeConnection";
import { CanBePromotionalProductsComponent } from "../../components/storeComponents/canBePromotionalProductsComponent";

export function CanBePromotionalProductsContainer({isSearch, searchedWord}:{isSearch:boolean, searchedWord:string}) {
    
    const [products, setProducts] = useState<any[]>([]); 

    useEffect(() => {
        async function fetchData() {
            //verifica se o parâmetro diz que veio de uma pesquisa para saber se os produtos que serão buscados devem ter filtros adicionais
            if (isSearch) {
                const res = await SellerGetStoreSearchedProductsConnection({
                    body: { searchedWord }
                });
                if (res && res.ok) setProducts(res.msg);
            } else {
                const res = await SellerGetStoreProductsConnection({ body: {} });
                if (res && res.ok) setProducts(res.msg);
            }
        }
        fetchData();
    }, [isSearch, searchedWord]);

    return (<>
                {products.map((item: any, index: any) => (
                <CanBePromotionalProductsComponent 
                key={index}
                productId={item["_id"]["$oid"]} 
                productName={item["name"]} 
                productPrice={item["price"]} 
                    />
                ))}
                </>
        );
}