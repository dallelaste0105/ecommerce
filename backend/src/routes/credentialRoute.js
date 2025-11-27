const express = require('express');
const router = express.Router();
const credentialController = require('../controllers/credentialController');
const jwtMiddleware = require('../controllers/jwtMiddleware');

//credential

router.post('/signup', credentialController.signupController);
router.post('/login', credentialController.loginController);
router.get('/test', jwtMiddleware.authMiddleware, credentialController.test);

module.exports = router;