const express = require('express');
const { 
  getSuscriberAdditionalServiceController,
  getSpecificSuscriberController
} = require('../controllers/suscriberAdditionalServicesController');

const router = express.Router();

// Ruta para obtener un servicio suplementario específico de un abonado
router.get('/get-suscriber-additional-service', getSuscriberAdditionalServiceController);

// Ruta para obtener todos los servicios suplementarios de un abonado específico
router.get('/get-specific-suscriber', getSpecificSuscriberController);

module.exports = router;
