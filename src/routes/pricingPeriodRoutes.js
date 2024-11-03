const express = require('express');
const {
  getSubscriberDetailsController,
} = require('../controllers/pricingPeriodController');

const router = express.Router();

// Ruta para obtener detalles del abonado específico por número de abonado
router.get('/get-subscriber-details', getSubscriberDetailsController);

module.exports = router;
