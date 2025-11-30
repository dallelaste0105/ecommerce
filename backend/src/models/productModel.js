const db = require("../db");

async function createProduct(name, description, imageUrl, price, mainTagId, salesmanId, promotionType) {
    return new Promise((resolve, reject) => {
        const query1 = "INSERT INTO product (name, description, imageUrl, price, mainTagId, salesmanId, promotionType) VALUES (?,?,?,?,?,?,?)";
        db.query(query1, [name, description, imageUrl, price, mainTagId, salesmanId, promotionType], (error1, result1) => {
            if (error1) {
                return reject(error1);
            }
            return resolve(result1);
        })
    })
}

async function getProductModel() {
    return new Promise((resolve, reject) => {
        const query1 = "SELECT * FROM product";
        db.query(query1, [], (error1, result1) => {
            if (error1) {
                return reject(error1);
            }
            return resolve(result1);
        })
    })
}

async function getFavoritesSubtopics(id) {
    return new Promise((resolve, reject) => {
        const query1 = "SELECT subTagId WHERE userId = ?";
        db.query(query1, [id], (error, result)=>{
            if (error) {
                return reject(error);
            }
            return resolve(result);
        })
    })
}

module.exports = {
    createProduct,
    getProductModel,
    getFavoritesSubtopics
};