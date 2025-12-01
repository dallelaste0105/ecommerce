const db = require("../db");

async function getPromotionProductsModel(userId) {
    return new Promise((resolve, reject) => {

        const q1 = `
            SELECT 
                p.id,
                p.itemId,
                p.subTagId,
                i.name
            FROM product p
            JOIN item i ON i.id = p.itemId
            WHERE p.promotionType = ?
            LIMIT 50
        `;

        db.query(q1, ["single"], (err1, promotions) => {
            if (err1) return reject(err1);

            const q2 = `
                SELECT subTagId 
                FROM userfavoritesubtag 
                WHERE userId = ?
            `;

            db.query(q2, [userId], (err2, favSubtagsRaw) => {
                if (err2) return reject(err2);

                const favoriteSubtags = favSubtagsRaw.map(r => r.subTagId);

                if (favoriteSubtags.length === 0) {
                    console.log("[2.1] Nenhuma subtag favorita → só promoções");
                    return resolve(promotions);
                }

                const q3 = `
                    SELECT 
                        p.id,
                        p.itemId,
                        p.subTagId,
                        i.name
                    FROM product p
                    JOIN item i ON i.id = p.itemId
                    WHERE p.subTagId IN (${favoriteSubtags.map(_ => "?").join(",")})
                    LIMIT 50
                `;

                db.query(q3, favoriteSubtags, (err3, favoriteProducts) => {
                    if (err3) return reject(err3);
                    const promoIds = promotions.map(p => p.id);
                    const favoriteIds = favoriteProducts.map(p => p.id);
                    const intersection = favoriteProducts.filter(p => promoIds.includes(p.id));
                    const finalList = [...intersection, ...promotions];
                    return resolve(finalList);
                });
            });
        });
    });
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