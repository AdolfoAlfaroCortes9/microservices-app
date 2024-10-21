const express = require('express');
const { 
  getAbonadoController, 
  createAbonadoController, 
  updateAbonadoController, 
  deleteAbonadoController 
} = require('../controllers/abonadoController.js');

const router = express.Router();

// Ruta para obtener un abonado por su número usando query string
router.get('/get-suscriber-number', getAbonadoController);

// Ruta para crear un nuevo abonado
router.post('/create-suscriber', createAbonadoController);

// Ruta para actualizar un abonado existente (usamos param en vez de query string aquí)
router.put('/update-suscriber/:suscriber-number', updateAbonadoController);

// Ruta para eliminar un abonado por su número
router.delete('/delete-suscriber/:suscriber-number', deleteAbonadoController);

module.exports = router;