import CampaignProductsContainer from "../../containers/products/user/userCampaignProductsContainer";
import PromotionProductsContainer from "../../containers/products/user/userPromotionProductsContainer";
import ProductsContainer from "../../containers/products/user/userProductsContainer";
import UserSearchToolComponent from "../../components/products/user/userSearchToolComponent";

export default function InitialPage() {
    return <div>
        <UserSearchToolComponent/>
        <h1>Campanhas da Loja</h1><br />
        <CampaignProductsContainer/><br />
        <h1>Produtos em Promoção</h1><br />
        <PromotionProductsContainer/><br />
        <h1>Outros Produtos</h1><br />
        <ProductsContainer/>
    </div>
}