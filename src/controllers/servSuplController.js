const ServicioSuplementario = require('../models/servSuplModel');
const { checkConnection } = require('../db');

// Obtener un servicio suplementario por código de producto y servicio
const getServicioSuplementarioController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  const servicio = await ServicioSuplementario.getServicioSuplementario(req.query['product-code'], req.query['service-code']);
  if (!servicio) {
    return res.json({ 
      status: 'no', 
      message: 'No existe ese dato en la tabla GA_SERVSUPL' });
  }
  res.json({ 
    status: 'si', 
    message: 'Servicio encontrado', 
    data: servicio });
};

// Crear un nuevo servicio suplementario
const createServicioSuplementarioController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newServicio = await ServicioSuplementario.createServicioSuplementario(req.body);
    res.status(201).json({ 
      status: 'si', 
      message: 'Servicio suplementario creado', 
      data: newServicio });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Actualizar un servicio suplementario
const updateServicioSuplementarioController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedServicio = await ServicioSuplementario.updateServicioSuplementario(req.params['product-code'], req.params['service-code'], req.body);
    if (!updatedServicio) {
      return res.json({ 
        status: 'no', 
        message: 'No existe ese dato en la tabla GA_SERVSUPL' });
    }
    res.json({ 
      status: 'si', 
      message: 'Servicio suplementario actualizado', 
      data: updatedServicio });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Eliminar un servicio suplementario
const deleteServicioSuplementarioController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    await ServicioSuplementario.deleteServicioSuplementario(req.params['product-code'], req.params['service-code']);
    res.status(204).send({ 
      status: 'si', 
      message: 'Servicio suplementario eliminado' });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

module.exports = { 
  getServicioSuplementarioController, 
  createServicioSuplementarioController, 
  updateServicioSuplementarioController, 
  deleteServicioSuplementarioController 
};