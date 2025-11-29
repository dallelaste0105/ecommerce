const db = require("../db");

async function getPromotionProductsModel(id) {
    return new Promise((resolve, reject) => {
        const query1 = "SELECT * FROM product WHERE salesmanId = ? AND promotionType=?";
        db.query(query1, [id, "single"], (error1, result1) => {
            if (error1) {
                return reject(error1);
            }
            return resolve(result1);
        })
    })
}

module.exports = {
    getPromotionProductsModel
}