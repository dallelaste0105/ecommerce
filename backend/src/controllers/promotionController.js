const promotionModel = require("../models/promotionModel");
const productModel = require("../models/productModel");

async function getPromotionProducts(req, res) {
    const {id, userType} = req.user;
    try {
        const promotionProducts = await promotionModel.getPromotionProductsModel(id);
        if (promotionProducts) {
            return res.status(200).json({message:promotionProducts});
        }
        return res.status(500).json({message:"Erro ao retornar promoções"});
    } catch (error) {
        return res.status(500).json({message:"Erro crítico"});
    }
}

async function getCampaigns(req, res) {
    const {id, userType} = req.user;
    try {
        const campaigns = await promotionModel.getCampaignsModel();
        if (campaigns) {
            return res.status(200).json({message:campaigns});
        }
        return res.status(500).json({message:"Erro ao retornar campanhas"});
    } catch (error) {
        return res.status(500).json({message:"Erro crítico"});
    }
}

module.exports = {
    getPromotionProducts,
    getCampaigns
}