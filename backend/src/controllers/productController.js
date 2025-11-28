const productModel = require("../models/productModel");

async function createProductController(req, res) {
    const {id, userType} = req.user;
    const {name, description, value, url} = req.body;
    try {
        const productInsert = await productModel.createProduct(name, description, url, value, 0, id, "none");
        if (productInsert.affectedRows > 0) {
            return res.status(200).json({message:"Produto inserido com sucesso"});
        }
        else{
            return res.status(500).json({message:"Erro ao inserir produto"});
        }
    } catch (error) {
    console.error("ERRO CREATE PRODUCT:", error);
    return res.status(500).json({ message: "Erro crítico", error: error.message });
}

}

async function getProductsController(req, res) {
    try {
        const products = await productModel.getProductModel();
        res.status(200).json({message:products[0]})
    } catch (error) {
        res.status(200).json({message:"Problemas ao retornar itens"})
    }
}

module.exports = {
    createProductController,
    getProductsController
}