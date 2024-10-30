const Product = require('../models/productModel');
const { checkConnection } = require('../db');

//Obtener un producto especifico
const getProductController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'Error', 
      message: 'Unable to connect to database' 
    });
  }
  try {
    const product = await Product.getProduct(req.query['product-code']);
    if (!product) {
      return res.json({ 
        status: 'Error', 
        message: 'Non-existent product' 
      });
    }
    res.json({ 
      status: 'Success', 
      message: 'Found product', 
      data: product 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error', 
      message: error.message 
    });
  }
};

module.exports = {  
  getProductController
};
