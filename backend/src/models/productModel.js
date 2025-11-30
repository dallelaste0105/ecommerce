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

async function searchProductsModel(search) {
    return new Promise((resolve, reject) => {

        const fulltextQuery = `
            SELECT 
                id,
                name,
                MATCH(name) AGAINST (? IN NATURAL LANGUAGE MODE) AS score
            FROM product
            ORDER BY score DESC
            LIMIT 50
        `;

        db.query(fulltextQuery, [search], (error, fulltextResults) => {
            if (error) return reject(error);

            // Se FULLTEXT encontrou algo (score > 0), retorna
            const foundRelevant = fulltextResults.some(r => r.score > 0);

            if (foundRelevant) {
                return resolve(fulltextResults);
            }

            // FALLBACK (não achou nada relevante)
            const fallbackQuery = `
                SELECT 
                    id,
                    name,
                    0 AS score
                FROM product
                WHERE name LIKE CONCAT('%', ?, '%')
                LIMIT 50
            `;

            db.query(fallbackQuery, [search], (fallbackError, fallbackResults) => {
                if (fallbackError) return reject(fallbackError);

                return resolve(fallbackResults);
            });
        });
    });
}



module.exports = {
    createProduct,
    getProductModel,
    getFavoritesSubtopics,
    searchProductsModel
};