const express = require('express');
const {  
  getServicioSuplementarioController, 
  createServicioSuplementarioController, 
  updateServicioSuplementarioController, 
  deleteServicioSuplementarioController 
} = require('../controllers/servSuplController');

const router = express.Router();

// Ruta para obtener un servicio suplementario
router.get('/get-supplementary-service', getServicioSuplementarioController);

// Ruta para crear un nuevo servicio suplementario
router.post('/create-supplementary-service', createServicioSuplementarioController);

// Ruta para actualizar un servicio suplementario
router.put('/update-supplementary-service/:product-code/:service-code', updateServicioSuplementarioController);

// Ruta para eliminar un servicio suplementario
router.delete('/delete-supplementary-service/:product-code/:service-code', deleteServicioSuplementarioController);

module.exports = router;
