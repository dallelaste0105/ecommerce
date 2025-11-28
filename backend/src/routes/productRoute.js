const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const jwtMiddleware = require('../controllers/jwtMiddleware');

//product

router.post('/create', jwtMiddleware.authMiddleware, productController.createProductController);

module.exports = router;