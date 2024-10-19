const SuplAbonado = require('../models/servSuplAbonadoModel.js');
const { checkConnection } = require('../db.js');

// Obtener todos los servicios suplementarios de abonados
const getAllServiciosSuplAbonados = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  const servicios = await SuplAbonado.getAllServiciosSuplAbonados();
  res.json({ status: 'si', message: 'Conexión exitosa', data: servicios });
};

// Obtener un servicio suplementario de abonado por número de abonado y código de servicio
const getServicioSuplAbonado = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  const servicio = await SuplAbonado.getServicioSuplAbonadoById(req.query['abonado-number'], req.query['service-code']);
  if (!servicio) {
    return res.json({ status: 'no', message: 'No existe ese dato en la tabla GA_SERVSUPLABO' });
  }
  res.json({ status: 'si', message: 'Servicio encontrado', data: servicio });
};

// Crear un nuevo servicio suplementario de abonado
const createServicioSuplAbonado = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newServicio = await SuplAbonado.createServicioSuplAbonado(req.body);
    res.status(201).json({ status: 'si', message: 'Servicio suplementario de abonado creado', data: newServicio });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Actualizar un servicio suplementario de abonado
const updateServicioSuplAbonado = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedServicio = await SuplAbonado.updateServicioSuplAbonado(req.params['abonado-number'], req.params['service-code'], req.body);
    if (!updatedServicio) {
      return res.json({ status: 'no', message: 'No existe ese dato en la tabla GA_SERVSUPLABO' });
    }
    res.json({ status: 'si', message: 'Servicio suplementario de abonado actualizado', data: updatedServicio });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Eliminar un servicio suplementario de abonado
const deleteServicioSuplAbonado = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    await SuplAbonado.deleteServicioSuplAbonado(req.params['abonado-number'], req.params['service-code']);
    res.status(204).send({ status: 'si', message: 'Servicio suplementario de abonado eliminado' });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

module.exports = { 
  getAllServiciosSuplAbonados, 
  getServicioSuplAbonado, 
  createServicioSuplAbonado, 
  updateServicioSuplAbonado, 
  deleteServicioSuplAbonado 
};
