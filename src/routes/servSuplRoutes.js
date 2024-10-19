const express = require('express');
const { 
  getAllServiciosSuplementarios, 
  getServicioSuplementario, 
  createServicioSuplementario, 
  updateServicioSuplementario, 
  deleteServicioSuplementario 
} = require('../controllers/servSuplController.js');

const router = express.Router();

// Ruta para obtener todos los servicios suplementarios
router.get('/get-all-supplementary-services', getAllServiciosSuplementarios);

// Ruta para obtener un servicio suplementario
router.get('/get-supplementary-service', getServicioSuplementario);

// Ruta para crear un nuevo servicio suplementario
router.post('/create-supplementary-service', createServicioSuplementario);

// Ruta para actualizar un servicio suplementario
router.put('/update-supplementary-service/:product-code/:service-code', updateServicioSuplementario);

// Ruta para eliminar un servicio suplementario
router.delete('/delete-supplementary-service/:product-code/:service-code', deleteServicioSuplementario);

module.exports = router;
