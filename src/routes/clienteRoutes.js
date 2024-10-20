const express = require('express');
const { 
  getClienteController, 
  createClienteController, 
  updateClienteController, 
  deleteClienteController 
} = require('../controllers/clienteController');

const router = express.Router();

// Ruta para obtener un cliente por su código
router.get('/get-customer-data', getClienteController);

// Ruta para crear un nuevo cliente
router.post('/create-customer', createClienteController);

// Ruta para actualizar un cliente existente
router.put('/update-customer/:customer-code', updateClienteController);

// Ruta para eliminar un cliente
router.delete('/delete-customer/:customer-code', deleteClienteController);

module.exports = router;
