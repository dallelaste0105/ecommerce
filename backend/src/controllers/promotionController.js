const promotionModel = require("../models/promotionModel");

async function getPromotionProducts(req, res) {
    const {id, userType} = req.user;
    try {
        const promotionProducts = await promotionModel.getPromotionProductsModel(id);
        if (promotionProducts) {
            return res.status(200).json({message:promotionProducts});
        }
    } catch (error) {
        return res.status(500).json({message:"Erro crítico"});
    }
}

async function getCampaigns(req, res) {
    const {id, userType} = req.user;
    try {
        
    } catch (error) {
        return res.status(500).json({message:"Erro crítico"});
    }
}

module.exports = {
    getPromotionProducts,
    getCampaigns
}