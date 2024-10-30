const express = require('express');
const {
  getSubscriberDetailsController,
  getCustomerDetailsController,
} = require('../controllers/intarcelController');

const router = express.Router();

// Ruta para obtener detalles del abonado específico por número de abonado
router.get('/get-subscriber-details', getSubscriberDetailsController);

// Ruta para obtener detalles del cliente específico por código de cliente
router.get('/get-customer-details', getCustomerDetailsController);

module.exports = router;
