const express = require('express');
const { 
  getCliente, 
  createCliente, 
  updateCliente, 
  deleteCliente 
} = require('../controllers/clienteController.js');

const router = express.Router();

// Ruta para obtener un cliente por su código
router.get('/get-customer-data', getCliente);

// Ruta para crear un nuevo cliente
router.post('/create-customer', createCliente);

// Ruta para actualizar un cliente existente
router.put('/update-customer/:customer-code', updateCliente);

// Ruta para eliminar un cliente
router.delete('/delete-customer/:customer-code', deleteCliente);

module.exports = router;
