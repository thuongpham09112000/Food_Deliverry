const express = require('express');
const authController = require('../controllers/AuthController');

const router = express.Router();

//đăng ký
router.post('/register', authController.register);

//đăng nhập
router.post('/login', authController.login);

//đăng xuất
router.get('/logout', authController.logout);

module.exports = router;
