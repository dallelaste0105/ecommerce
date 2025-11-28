const credentialModel = require("../models/credentialModel");
require('dotenv').config();
const bCrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function saveJwt(res, token) {
    return res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
        path: '/',
        maxAge: 3600000
    })
}

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
    const {name, password} = req.body;

    try {
        const userRes = await credentialModel.userExistModel(name);
        const user = userRes[0];
        if (user) {
            if (await bCrypt.compare(password, user.password)) {
                const token = jwt.sign({"id":user.id, "userType":user.userType}, process.env.JWT_SECRET, {expiresIn:"48h"});
                saveJwt(res, token);
                if (user.userType == "user") {
                    return res.status(200).json({message:"Usuário fez login com sucesso"});
                } else {
                    return res.status(200).json({message:"Vendedor fez login com sucesso"});
                }
                
            } else {
                return res.status(500).json({message:"A senha está incorreta"})
            } 
        }
        else{
            return res.status(500).json({message:"Este usuário não existe"})
        }
    } catch (error) {
        return res.status(500).json({message:"Erro crítico"});
    }
}

async function test(req, res) {
    const {id, userType} = req.user;
    try {
        return res.status(200).json({message:id});
    } catch (error) {
        return res.status(500).json({message:"Erro no controller"});
    }
}

module.exports = {
    signupController,
    loginController,
    test
};