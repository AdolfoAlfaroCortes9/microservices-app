const Intarcel = require('../models/intarcelModel');
const { checkConnection } = require('../db');

// Controlador para obtener detalles del abonado específico
const getSubscriberDetailsController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({
      status: 'Error',
      message: 'Unable to connect to database',
    });
  }

  try {
    const subscriberDetails = await Intarcel.getSubscriberDetails(req.query['subscriber-number']);
    if (subscriberDetails.length === 0) {
      return res.json({
        status: 'Error',
        message: 'Subscriber not found',
      });
    }

    res.json({
      status: 'Success',
      message: 'Subscriber details retrieved',
      data: subscriberDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error.message,
    });
  }
};

// Controlador para obtener detalles del cliente específico
const getCustomerDetailsController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({
      status: 'Error',
      message: 'Unable to connect to database',
    });
  }

  try {
    const customerDetails = await Intarcel.getCustomerDetails(req.query['customer-code']);
    if (customerDetails.length === 0) {
      return res.json({
        status: 'Error',
        message: 'Customer not found',
      });
    }

    res.json({
      status: 'Success',
      message: 'Customer details retrieved',
      data: customerDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error.message,
    });
  }
};

module.exports = {
  getSubscriberDetailsController,
  getCustomerDetailsController,
};
