const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const jwtMiddleware = require('../controllers/jwtMiddleware');

//product

router.post('/create', jwtMiddleware.authMiddleware, productController.createProductController);
router.get('/getproducts', jwtMiddleware.authMiddleware, productController.getProductsController);
router.post('/search', jwtMiddleware.authMiddleware, productController.searchProductsController);

module.exports = router;