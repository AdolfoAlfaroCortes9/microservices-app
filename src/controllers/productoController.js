const Producto = require('../models/productoModel.js');
const { checkConnection } = require('../db.js');

// Obtener todos los productos
const getAllProductos = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'denied', message: 'No se pudo conectar a la base de datos' });
  }
  const productos = await Producto.getAllProductos();
  res.json({ status: 'success', message: 'Conexión exitosa', data: productos });
};

// Obtener un producto por su código
const getProducto = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'denied', message: 'No se pudo conectar a la base de datos' });
  }
  const producto = await Producto.getProductoById(req.query['product-code']);
  if (!producto) {
    return res.json({ status: 'denied', message: 'No existe ese dato en la tabla GE_PRODUCTOS' });
  }
  res.json({ status: 'success', message: 'Producto encontrado', data: producto });
};

// Crear un nuevo producto
const createProducto = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'denied', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newProducto = await Producto.createProducto(req.body);
    res.status(201).json({ status: 'success', message: 'Producto creado', data: newProducto });
  } catch (error) {
    res.status(500).json({ status: 'denied', message: error.message });
  }
};

// Actualizar un producto existente
const updateProducto = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'denied', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedProducto = await Producto.updateProducto(req.params['product-code'], req.body);
    if (!updatedProducto) {
      return res.json({ status: 'denied', message: 'No existe ese dato en la tabla GE_PRODUCTOS' });
    }
    res.json({ status: 'success', message: 'Producto actualizado', data: updatedProducto });
  } catch (error) {
    res.status(500).json({ status: 'denied', message: error.message });
  }
};

// Eliminar un producto
const deleteProducto = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'denied', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    await Producto.deleteProducto(req.params['product-code']);
    res.status(204).send({ status: 'success', message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ status: 'denied', message: error.message });
  }
};

// Cambiar 'export default' a 'module.exports'
module.exports = { 
  getAllProductos, 
  getProducto, 
  createProducto, 
  updateProducto, 
  deleteProducto 
};
