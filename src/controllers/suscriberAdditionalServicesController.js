const SuscriberAdditionalService = require('../models/suscriberAdditionalServicesModel');
const { checkConnection } = require('../db');

// Controlador para obtener un servicio suplementario específico
const getSuscriberAdditionalServiceController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database'
    });
  }

  try {
    const suscriberAdditionalService = await SuscriberAdditionalService.getSuscriberAdditionalService(req.query['suscriber-number'], req.query['service-code']);
    if (!suscriberAdditionalService) {
      return res.json({ 
        status: 'Error', 
        message: 'Subscriber does not exist' 
      });
    }

    res.json({ 
      status: 'Success', 
      message: 'Found service', 
      data: suscriberAdditionalService 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message 
    });
  }
};

// Controlador para obtener todos los servicios suplementarios de un suscriptor
const getSpecificSuscriberController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database'
    });
  }

  try {
    const getSpecificSuscriber = await SuscriberAdditionalService.getSpecificSubscriberService(req.query['suscriber-number']);
    if (getSpecificSuscriber.length === 0) {
      return res.json({ 
        status: 'Error', 
        message: 'Subscriber does not exist' 
      });
    }

    res.json({ 
      status: 'Success', 
      message: 'Found services for subscriber', 
      data: getSpecificSuscriber
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message 
    });
  }
};

module.exports = { 
  getSuscriberAdditionalServiceController,
  getSpecificSuscriberController
};