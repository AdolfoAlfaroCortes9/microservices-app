const express = require('express');
const { 
  getAbonadoController, 
  createAbonadoController, 
  updateAbonadoController, 
  deleteAbonadoController 
} = require('../controllers/abonadoController');

const router = express.Router();

// Ruta para obtener un abonado por su número usando query string
router.get('/get-suscriber-number', getAbonadoController);

router.post('/create-suscriber', createAbonadoController);

// Ruta para actualizar un abonado existente (usamos query string aquí)
router.put('/update-suscriber', updateAbonadoController);

// Ruta para eliminar un abonado por su número (usamos query string aquí)
router.delete('/delete-suscriber', deleteAbonadoController);

module.exports = router;