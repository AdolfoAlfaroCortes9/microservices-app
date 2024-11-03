const express = require('express');
const {  
  getAdditionalServiceController, 
  searchServiceController,
} = require('../controllers/additionalServicesController');

const router = express.Router();

// Ruta para obtener un servicio suplementario
router.get('/get-additional-service', getAdditionalServiceController);

// Ruta para obtener un servicio suplementario por su código de servicio
router.get('/get-service', searchServiceController);

module.exports = router;
