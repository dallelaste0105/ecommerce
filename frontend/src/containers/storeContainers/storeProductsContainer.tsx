import { GetStoreProductsConnection } from "../../connections/storeConnection"
import { StoreProductComponent } from "../../components/storeComponents/storeProductComponent";
import { useEffect, useState } from "react";
import { GetStoreSearchedProductsConnection } from "../../connections/productConnection";

export function StoreProductsContainer({searched, searchedWord}:{searched:boolean, searchedWord:string}) {
    const [products, setProducts] = useState<any[]>([]); 
    
    useEffect(() => {
    async function fetchData() {
        //verifica se o parâmetro diz que veio de uma pesquisa para saber se os produtos que serão buscados devem ter filtros adicionais
        if (searched) {
            const res = await GetStoreSearchedProductsConnection({
                body: { searchedWord }
            });
            if (res && res.ok) setProducts(res.msg);
        } else {
            const res = await GetStoreProductsConnection({ body: {} });
            if (res && res.ok) setProducts(res.msg);
        }
    }
    fetchData();
}, [searched, searchedWord]);
 
    
    return (<>
            {products.map((item: any, index: any) => (
            <StoreProductComponent 
            key={index}
            id={item["_id"]["$oid"]} 
            name={item["name"]} 
            price={item["price"]} 
                />
            ))}
            </>
    );
}