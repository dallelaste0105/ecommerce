const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');
const jwtMiddleware = require('../controllers/jwtMiddleware');

//promotion

router.get('/getpromotionproducts', jwtMiddleware.authMiddleware, promotionController.getPromotionProducts);
router.get('/getcampaigns', jwtMiddleware.authMiddleware, promotionController.getCampaigns);




module.exports = router;