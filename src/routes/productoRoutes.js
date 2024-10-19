const express = require('express');
const { 
  getAllProductos, 
  getProducto, 
  createProducto, 
  updateProducto, 
  deleteProducto 
} = require('../controllers/productoController.js');

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/get-all-products', getAllProductos);

// Ruta para obtener un producto por su código
router.get('/get-product', getProducto);

// Ruta para crear un nuevo producto
router.post('/create-product', createProducto);

// Ruta para actualizar un producto existente
router.put('/update-product/:product-code', updateProducto);

// Ruta para eliminar un producto
router.delete('/delete-product/:product-code', deleteProducto);

module.exports = router;