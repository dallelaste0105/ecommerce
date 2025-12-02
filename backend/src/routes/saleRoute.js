const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const jwtMiddleware = require('../controllers/jwtMiddleware');

//sale

router.post('/saveorchangepixkey', jwtMiddleware.authMiddleware, saleController.saveOrChangePixkeyController);
router.post('/request', jwtMiddleware.authMiddleware, saleController.requestController);

module.exports = router;