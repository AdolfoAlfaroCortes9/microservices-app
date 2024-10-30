const express = require('express');
const { 
  getCustomerController, 
} = require('../controllers/customerController');

const router = express.Router();

// Ruta para obtener un cliente por su código
router.get('/get-customer-data', getCustomerController);

module.exports = router;
