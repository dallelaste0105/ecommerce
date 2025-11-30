const db = require("../db");

async function getPromotionProductsModel(id) {
    return new Promise((resolve, reject) => {
        const query1 = "SELECT * FROM product WHERE promotionType=? LIMIT 50";
        db.query(query1, ["single"], (error1, result1) => {
            if (error1) {
                return reject(error1);
            }
            return resolve(result1);
        })
    })
}

async function getCampaignsModel() {
    return new Promise((resolve, reject) => {
        const query1 = "SELECT * FROM campaign ORDER BY saleQuantity DESC LIMIT 5";
        db.query(query1, [], (error1, result1) => {
            if (error1) {
                return reject(error1);
            }
            return resolve(result1);
        })
    })
}

module.exports = {
    getPromotionProductsModel,
    getCampaignsModel
}