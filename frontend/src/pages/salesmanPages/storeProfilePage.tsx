import {Link} from "react-router-dom";
import CampaignProductsContainer from "../../containers/products/user/campaignProductsContainer";
import PromotionProductsContainer from "../../containers/products/user/promotionProductsContainer";
import ProductsContainer from "../../containers/products/user/productsContainer";

export default function StoreProfilePage() {
    return <div>

        <h1>Campanhas da Loja</h1>
        <Link to="/login">
            Criar Campanha
        </Link>
        <CampaignProductsContainer/><br />
        


        <h1>Produtos em Promoção</h1>
        <Link to="/login">
            Criar Promoção Única
        </Link>
        <PromotionProductsContainer/><br />
        

        <h1>Outros Produtos</h1>
        <Link to="/login">
            Criar Produto
        </Link>
        <ProductsContainer/><br />
        
        <br />
        
        
    </div>
}