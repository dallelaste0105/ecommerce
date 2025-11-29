import CampaignProductsContainer from "../../containers/products/user/campaignProductsContainer";
import PromotionProductsContainer from "../../containers/products/user/promotionProductsContainer";
import ProductsContainer from "../../containers/products/user/productsContainer";

export default function InitialPage() {
    return <div>
        <h1>Campanhas da Loja</h1><br />
        <CampaignProductsContainer/><br />
        <h1>Produtos em Promoção</h1><br />
        <PromotionProductsContainer/><br />
        <h1>Outros Produtos</h1><br />
        <ProductsContainer/>
    </div>
}