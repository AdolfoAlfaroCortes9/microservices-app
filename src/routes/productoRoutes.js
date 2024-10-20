const express = require('express');
const { 
  getProductoController, 
  createProductoController, 
  updateProductoController, 
  deleteProductoController 
} = require('../controllers/productoController');

const router = express.Router();

// Ruta para obtener un producto por su código
router.get('/get-product', getProductoController);

// Ruta para crear un nuevo producto
router.post('/create-product', createProductoController);

// Ruta para actualizar un producto existente
router.put('/update-product/:product-code', updateProductoController);

// Ruta para eliminar un producto
router.delete('/delete-product/:product-code', deleteProductoController);

module.exports = router;