const db = require("../db");

async function getPromotionProductsModel(userId) {
    return new Promise((resolve, reject) => {
        console.log("[promotionModel] getPromotionProductsModel START, userId:", userId);

        if (!userId && userId !== 0) {
            const msg = "[promotionModel] Parâmetro inválido: userId ausente";
            console.error(msg);
            return reject(new Error(msg));
        }

        const qFav = `SELECT subTagId FROM userfavoritesubtag WHERE userId = ?`;
        db.query(qFav, [userId], (errFav, favoriteRows) => {
            if (errFav) {
                console.error("[promotionModel] ERRO ao buscar userfavoritesubtag:", errFav);
                return reject(errFav);
            }

            const favoriteSubtags = Array.isArray(favoriteRows)
                ? favoriteRows.map(r => r.subTagId).filter(x => x != null)
                : [];

            console.log("[promotionModel] favoriteSubtags:", favoriteSubtags);

            const basePromoSelect = `
                SELECT
                    p.id,
                    p.name,
                    p.description,
                    p.imageUrl,
                    p.price,
                    p.mainTagId,
                    p.salesmanId,
                    p.promotionType,
                    MAX(sp.promotionValue) AS promotionValue,
                    COALESCE(SUM(s.productQuantity), 0) AS totalSales
                FROM product p
                JOIN singlepromotion sp ON sp.productId = p.id
                LEFT JOIN sale s ON s.productId = p.id
            `;

            const groupBy = ` GROUP BY p.id `;

            if (favoriteSubtags.length === 0) {
                const qOnlyPromos = basePromoSelect + groupBy + ` ORDER BY totalSales DESC LIMIT 50 `;
                console.log("[promotionModel] Nenhuma subtag favorita. Executando qOnlyPromos");
                return db.query(qOnlyPromos, [], (errPromo, resultPromo) => {
                    if (errPromo) {
                        console.error("[promotionModel] ERRO qOnlyPromos:", errPromo);
                        return reject(errPromo);
                    }
                    console.log("[promotionModel] qOnlyPromos result count:", resultPromo?.length || 0);
                    return resolve(resultPromo || []);
                });
            }

            const limitFav = 20;
            const favPlaceholders = favoriteSubtags.map(() => "?").join(",");
            const qFavPromo = `
                ${basePromoSelect}
                JOIN itemsubtag ist ON ist.itemId = p.id
                WHERE ist.subTagId IN (${favPlaceholders})
                ${groupBy}
                ORDER BY totalSales DESC
                LIMIT ${limitFav}
            `;

            console.log("[promotionModel] Executando qFavPromo:", qFavPromo);
            db.query(qFavPromo, favoriteSubtags, (errFavPromo, favPromoResults) => {
                if (errFavPromo) {
                    console.error("[promotionModel] ERRO qFavPromo:", errFavPromo);
                    return reject(errFavPromo);
                }

                const favCount = favPromoResults?.length || 0;
                console.log("[promotionModel] favPromoResults count:", favCount);

                const idsFav = favPromoResults.map(r => r.id).filter(x => x != null);
                console.log("[promotionModel] idsFav:", idsFav);

                const remainingLimit = 50 - favCount;

                if (remainingLimit <= 0) {
                    console.log("[promotionModel] Retornando apenas favoritos (limite atingido)");
                    return resolve(favPromoResults);
                }

                let qOtherPromo = basePromoSelect;
                const paramsOther = [];

                if (idsFav.length > 0) {
                    const idsPlaceholders = idsFav.map(() => "?").join(",");
                    qOtherPromo += ` WHERE p.id NOT IN (${idsPlaceholders}) `;
                    paramsOther.push(...idsFav);
                }

                qOtherPromo += groupBy + ` ORDER BY totalSales DESC LIMIT ${remainingLimit}`;

                console.log("[promotionModel] Executando qOtherPromo:", qOtherPromo, "params:", paramsOther);
                db.query(qOtherPromo, paramsOther, (errOther, otherResults) => {
                    if (errOther) {
                        console.error("[promotionModel] ERRO qOtherPromo:", errOther);
                        return reject(errOther);
                    }

                    console.log("[promotionModel] otherResults count:", otherResults?.length || 0);

                    const finalMap = new Map();

                    favPromoResults.forEach(p => finalMap.set(p.id, p));
                    otherResults.forEach(p => {
                        if (!finalMap.has(p.id)) finalMap.set(p.id, p);
                    });

                    const final = Array.from(finalMap.values()).slice(0, 50);
                    console.log("[promotionModel] final count:", final.length);

                    return resolve(final);
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