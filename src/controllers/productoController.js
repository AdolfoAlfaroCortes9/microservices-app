const Producto = require('../models/productoModel');
const { checkConnection } = require('../db');

//Obtener un producto especifico
const getProductoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }
  try {
    const producto = await Producto.getProducto(req.query['product-code']);
    if (!producto) {
      return res.json({ 
        status: 'denied', 
        message: 'No existe ese producto' 
      });
    }
    res.json({ 
      status: 'success', 
      message: 'Producto encontrado', 
      data: producto 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message 
    });
  }
};

// Crear un nuevo producto
const createProductoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }

  try {
    // Verificar si el producto ya existe
    const existingProducto = await Producto.getProducto(req.body.cod_producto); // Suponiendo que 'cod_producto' es único
    if (existingProducto) {
      return res.status(409).json({ 
        status: 'denied', 
        message: 'El producto ya existe en la base de datos' 
      });
    }

    // Crear el producto si no existe
    const newProducto = await Producto.createProducto(req.body);
    res.status(201).json({ 
      status: 'success', 
      message: 'Producto creado', 
      data: newProducto 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'denied', 
      message: error.message 
    });
  }
};

// Actualizar un producto existente
const updateProductoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedProducto = await Producto.updateProducto(req.params['product-code'], req.body);
    if (!updatedProducto) {
      return res.json({ 
        status: 'denied', 
        message: 'No existe ese dato en la tabla GE_PRODUCTOS' });
    }
    res.json({ 
      status: 'success', 
      message: 'Producto actualizado', 
      data: updatedProducto });
  } catch (error) {
    res.status(500).json({ 
      status: 'denied', 
      message: error.message });
  }
};

// Eliminar un producto
const deleteProductoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const deletedProducto = await Abonado.deleteAbonado(req.query['product-code']); 
    if (!deletedProducto) {
      return res.status(404).json({ 
        status: 'no', 
        message: 'No existe ese abonado en la base de datos' });
    }
    res.status(200).json({ 
      status: 'si', 
      message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

module.exports = {  
  getProductoController, 
  createProductoController, 
  updateProductoController, 
  deleteProductoController 
};
