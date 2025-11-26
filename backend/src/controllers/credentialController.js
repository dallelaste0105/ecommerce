const credentialModel = require("../models/credentialModel");
require('dotenv').config();
const bCrypt = require("bcrypt");

async function signupController(req, res) {
    const { name, email, password, userType } = req.body;

    try {
        console.log(name, email)
        if (!name || !email || !password || !userType) {
            return res.status(400).json({ message: "Todos os campos devem ser preenchidos" });
        }

        const userExist = await credentialModel.userExistModel(name);
        if (userExist.length > 0) {
            return res.status(400).json({ message: "Este usuário já existe" });
        }

        const encryptedPassword = await bCrypt.hash(password, 10);
        console.log(encryptedPassword);
        const ok = await credentialModel.signupModel(name, email, encryptedPassword, userType);
        if (ok) {
            return res.status(200).json({ message: "Cadastro realizado com sucesso" });
        } else {
            return res.status(500).json({ message: "Não foi possível realizar o cadastro" });
        }

        

    } catch (error) {
        return res.status(500).json({ message: "Erro crítico" });
    }
}

async function loginController(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).json({message:"Erro crítico"});
    }
}

module.exports = {
    signupController,
    loginController
};