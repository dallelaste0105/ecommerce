const credentialModel = require("../models/credentialModel");
require('dotenv').config();
const bCrypt = require("bcrypt");

async function signupController(req, res) {
    const { name, email, password, userType } = req.body;

    try {
        if (!name, !email, !password, !userType) {
            return res.status(500).json({message:"Todos os campos devem ser preenchidos"});
        }
        const userExist = await credentialModel.userExistModel(name);
        if(userExist){
            return res.status(500).json({message:"Este usuário já existe"});
        }
        else{
            if (userType == "user") {
                const encriptedPassword = bCrypt.hash(password, 10);
                await credentialModel.signupModel(name, email, encriptedPassword, "user");
        }
            else {
                const encriptedPassword = bCrypt.hash(password, 10);
                await credentialModel.signupModel(name, email, encriptedPassword, "salesman");
        }
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