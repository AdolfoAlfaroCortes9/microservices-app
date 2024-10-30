const Suscriber = require('../models/suscriberModel');
const { checkConnection } = require('../db');

// Obtener un Suscriber
const getSuscriberController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database' 
    });
  }
  try {
    const suscriber = await Suscriber.getSuscriber(req.query['suscriber-number']);
    if (!suscriber) {
      return res.json({ 
        status: 'Error', 
        message: 'Subscriber does not exist' 
      });
    }
    res.json({ 
      status: 'Success', 
      message: 'Found suscriber', 
      data: suscriber 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message 
    });
  }
};


module.exports = { 
  getSuscriberController
};