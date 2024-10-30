const Customer = require('../models/customerModel');
const { checkConnection } = require('../db');

// Obtener un cliente por su código
const getCustomerController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database'  
    });
  }
  try {
    const customer = await Customer.getCustomer(req.query['customer-code']);
    if (!customer) {
      return res.json({ 
        status: 'Error', 
        message: 'Customer does not exist'
      });
    }
    res.json({ 
      status: 'Success', 
      message: 'Found customer', 
      data: customer });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message });
  }
};


module.exports = { 
  getCustomerController
};
