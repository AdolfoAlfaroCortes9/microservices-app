const AdditionalService = require('../models/additionalServicesModel');
const { checkConnection } = require('../db');

// Obtener un servicio suplementario por código de producto y servicio
const getAdditionalServiceController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database' 
    });
  }

  try {
    const additionalService = await AdditionalService.getAdditionalService(req.query['product-code'], req.query['service-code']);
    if (!additionalService) {
      return res.json({ 
        status: 'Error', 
        message: 'Non-existent service'
      });
    }

    res.json({ 
      status: 'Sucess', 
      message: 'Found service', 
      data: additionalService 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message 
    });
  }
};

// Obtener un servicio suplementario por código de servicio
const searchServiceController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database' 
    });
  }

  try {
    const searchAService = await AdditionalService.searchService(req.query['service-code']);
    if (!searchAService) {
      return res.json({ 
        status: 'Error', 
        message: 'Non-existent service'
      });
    }

    res.json({ 
      status: 'Sucess', 
      message: 'Found service', 
      data: searchAService 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message 
    });
  }
};

module.exports = { 
  getAdditionalServiceController,
  searchServiceController
};
