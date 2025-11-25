const express = require('express');
const router = express.Router();
const testController = require('../controllers/test');

router.post('/test', testController.testController);

module.exports = router;