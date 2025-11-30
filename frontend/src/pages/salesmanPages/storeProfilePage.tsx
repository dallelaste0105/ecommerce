import {Link} from "react-router-dom";
import CampaignProductsContainer from "../../containers/products/salesman/salesmanCampaignProductsContainer";
import PromotionProductsContainer from "../../containers/products/salesman/salesmanPromotionProductsContainer";

export default function StoreProfilePage() {
    return <div>

        <h1>Campanhas da Loja</h1>
        <Link to="/login">
            Criar Campanha
        </Link>
        <CampaignProductsContainer/><br />
        


        <h1>Produtos em Promoção</h1>
        <Link to="/createpromotionpage">
            Criar Promoção Única
        </Link>
        <PromotionProductsContainer/><br />
        
        
    </div>
}