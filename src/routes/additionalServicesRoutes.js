const express = require('express');
const {  
  getAdditionalServiceController, 
} = require('../controllers/additionalServicesController');

const router = express.Router();

// Ruta para obtener un servicio suplementario
router.get('/get-additional-service', getAdditionalServiceController);

module.exports = router;
