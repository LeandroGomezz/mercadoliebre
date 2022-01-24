const express= require('express');
const router= express.Router();
const userController = require('../controllers/userController');

const path= require('path');

router.get('/register', userController.register);
router.get('/login', userController.login);
   
module.exports= router;