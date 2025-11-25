const testModel = require("../models/test");
require('dotenv').config();

async function testController(req, res) {
    const { data } = req.body;

    try {
        if (testModel.testModel(data)) {
            res.status(200).json({message:`O valor ${data} foi cadastrado`});
        } else {
            res.status(500).json({message:`O valor ${data} não foi cadastrado`});
        }
    } catch (error) {
        console.error('Erro em controller', error);
        return res.status(500).json({ message: "Erro crítico" });
    }
}

module.exports = {testController};