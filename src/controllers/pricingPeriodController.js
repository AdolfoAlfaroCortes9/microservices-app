const pricingPeriod = require('../models/pricingPeriodModel');
const { checkConnection } = require('../db');

// Controlador para obtener detalles del abonado 
const getSubscriberDetailsController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({
      status: 'Error',
      message: 'Unable to connect to database',
    });
  }

  try {
    const subscriberDetails = await pricingPeriod.getSubscriberDetails(req.query['subscriber-number']);
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

module.exports = {
  getSubscriberDetailsController
};
