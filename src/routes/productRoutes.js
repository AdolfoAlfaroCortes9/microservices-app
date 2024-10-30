const express = require('express');
const { 
  getProductController, 
} = require('../controllers/productController');

const router = express.Router();

// Ruta para obtener un producto por su código
router.get('/get-product', getProductController);

module.exports = router;