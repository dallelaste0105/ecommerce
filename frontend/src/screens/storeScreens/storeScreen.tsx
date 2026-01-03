import { StoreProductsContainer } from "../../containers/storeContainers/storeProductsContainer";
import { SearchProductComponent } from "../../components/productComponents/searchProductComponent";
import { useSearchParams } from "react-router-dom";

export default function StoreScreen({}:{}) {

    const [searchParams] = useSearchParams();

    //tenta pegar estes itens abaixo direto da Url (não obrigatórios, só para pesquisa)
    const bySearch = searchParams.get("bySearch") === "true";
    const searchedWord = searchParams.get("word") ?? "";


    return(
        <>
            <SearchProductComponent></SearchProductComponent>
            <StoreProductsContainer
                searched={bySearch && searchedWord.length > 0}
                searchedWord={searchedWord}
            />
        </>
    )
}