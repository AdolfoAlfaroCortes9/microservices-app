const express = require('express');
const { 
  getAllServiciosSuplAbonados, 
  getServicioSuplAbonado, 
  createServicioSuplAbonado, 
  updateServicioSuplAbonado, 
  deleteServicioSuplAbonado 
} = require('../controllers/servSuplAbonadoController.js');

const router = express.Router();

// Ruta para obtener todos los servicios suplementarios de abonados
router.get('/get-all-abonado-supplementary', getAllServiciosSuplAbonados);

// Ruta para obtener un servicio suplementario de abonado
router.get('/get-abonado-supplementary', getServicioSuplAbonado);

// Ruta para crear un nuevo servicio suplementario de abonado
router.post('/create-abonado-supplementary', createServicioSuplAbonado);

// Ruta para actualizar un servicio suplementario de abonado
router.put('/update-abonado-supplementary/:abonado-number/:service-code', updateServicioSuplAbonado);

// Ruta para eliminar un servicio suplementario de abonado
router.delete('/delete-abonado-supplementary/:abonado-number/:service-code', deleteServicioSuplAbonado);

module.exports = router;
