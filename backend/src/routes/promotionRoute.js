const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const jwtMiddleware = require('../controllers/jwtMiddleware');

//promotion

router.post('/create', jwtMiddleware.authMiddleware, productController.createProductController);
router.get('/getproducts', jwtMiddleware.authMiddleware, productController.getProductsController);

module.exports = router;