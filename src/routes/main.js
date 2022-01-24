const express= require('express');
const router= express.Router();
const mainController = require('../controllers/mainController');

const path= require('path');

router.get('/', mainController.home)


module.exports= router;