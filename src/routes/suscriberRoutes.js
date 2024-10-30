const express = require('express');
const { 
  getSuscriberController,  
} = require('../controllers/suscriberController');

const router = express.Router();

// Ruta para obtener un abonado por su número usando query string
router.get('/get-suscriber-number', getSuscriberController);

module.exports = router;