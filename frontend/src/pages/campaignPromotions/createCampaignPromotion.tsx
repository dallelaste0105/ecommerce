import GetCampaigns from "../../components/campaignPromotions/getCampaigns";
import GetPromotionProducts from "../../components/campaignPromotions/getPromotionProducts";

export default function CreateCampaignPromotion () {
    return <div>
        <h1>Suas Campanhas</h1>
        <GetCampaigns/>
        <br/>
        <h1>Suas Promoções</h1>
        <GetPromotionProducts/>
    </div>
}