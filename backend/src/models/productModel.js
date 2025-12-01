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


async function saveUserFavoriteSubtag(userId, productId) {
    return new Promise((resolve, reject) => {

        const getSubtagQuery = "SELECT subTagId FROM itemsubtag WHERE itemId = ?";
        const getUserSubtagsQuery = "SELECT id, subTagId FROM userfavoritesubtag WHERE userId = ? ORDER BY id ASC";
        const insertQuery = "INSERT INTO userfavoritesubtag (userId, subTagId) VALUES (?, ?)";
        const deleteQuery = "DELETE FROM userfavoritesubtag WHERE id = ?";

        if (!userId || !productId) {
            const msg = "Parâmetros inválidos: userId e productId são obrigatórios.";
            return reject(msg);
        }

        db.query(getSubtagQuery, [productId], (err1, subtagResult) => {
            if (err1) {
                return reject(err1);
            }

            if (!Array.isArray(subtagResult) || subtagResult.length === 0) {
                db.query("SELECT * FROM itemsubtag LIMIT 10", [], (errDump, dumpRows) => {
                    if (errDump) {
                        console.warn("Falha ao listar itemsubtag para debug:", errDump);
                    } else {
                        console.log("Exemplo de rows em itemsubtag (debug):", dumpRows);
                    }
                    return reject("Esse item não tem subTagId associado (verifique itemsubtag).");
                });
                return;
            }

            const newSubTagId = subtagResult[0].subTagId;
            if (!newSubTagId) {
                return reject("subTagId inválido.");
            }

            db.query(getUserSubtagsQuery, [userId], (err2, userResult) => {
                if (err2) {
                    return reject(err2);
                }


                if (Array.isArray(userResult) && userResult.length >= 5) {
                    const oldest = userResult[0].id;

                    db.query(deleteQuery, [oldest], (err3) => {
                        if (err3) {
                            return reject(err3);
                        }

                        db.query(insertQuery, [userId, newSubTagId], (err4, result4) => {
                            if (err4) {
                                return reject(err4);
                            }
                            return resolve(result4);
                        });
                    });

                } else {
                    db.query(insertQuery, [userId, newSubTagId], (err5, result5) => {
                        if (err5) {
                            return reject(err5);
                        }
                        return resolve(result5);
                    });
                }
            });
        });
    });
}





module.exports = {
    createProduct,
    getProductModel,
    getFavoritesSubtopics,
    searchProductsModel,
    saveUserFavoriteSubtag
};