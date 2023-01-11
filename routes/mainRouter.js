const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

// const path = require('path'); 

router.get('/', mainController.home);

router.get('/description-page', mainController.descriptionPage);

router.get('/cart', mainController.cart);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

module.exports = router;