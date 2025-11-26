const express = require('express');
const router = express.Router();
const credentialController = require('../controllers/credentialController');

//credential

router.post('/signup', credentialController.signupController);
router.post('/login', credentialController.loginController);

module.exports = router;