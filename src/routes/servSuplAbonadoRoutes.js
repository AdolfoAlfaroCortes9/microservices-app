const express = require('express');
const { 
  getServicioSuplAbonadoController, 
  createServicioSuplAbonadoController, 
  updateServicioSuplAbonadoController, 
  deleteServicioSuplAbonadoController 
} = require('../controllers/servSuplAbonadoController');

const router = express.Router();

// Ruta para obtener un servicio suplementario de abonado
router.get('/get-abonado-supplementary', getServicioSuplAbonadoController);

// Ruta para crear un nuevo servicio suplementario de abonado
router.post('/create-abonado-supplementary', createServicioSuplAbonadoController);

// Ruta para actualizar un servicio suplementario de abonado
router.put('/update-abonado-supplementary', updateServicioSuplAbonadoController);

// Ruta para eliminar un servicio suplementario de abonado
router.delete('/delete-abonado-supplementary', deleteServicioSuplAbonadoController);

module.exports = router;
