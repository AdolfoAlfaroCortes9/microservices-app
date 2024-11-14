const express = require('express');
const { 
  getSuscriberAdditionalServiceController,
} = require('../controllers/suscriberAdditionalServicesController');

const router = express.Router();

// Ruta para obtener un servicio suplementario específico de un abonado
router.get('/get-suscriber-additional-service', getSuscriberAdditionalServiceController);

module.exports = router;
