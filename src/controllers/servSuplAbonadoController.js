const SuplAbonado = require('../models/servSuplAbonadoModel');
const { checkConnection } = require('../db');

// Obtener un servicio suplementario de abonado por número de abonado y código de servicio
const getServicioSuplAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }

  try {
    const servicio = await SuplAbonado.getServicioSuplAbonado(req.query['abonado-number'], req.query['service-code']);
    if (!servicio) {
      return res.json({ 
        status: 'no', 
        message: 'No existe ese dato en la tabla GA_SERVSUPLABO' 
      });
    }

    res.json({ 
      status: 'si', 
      message: 'Servicio encontrado', 
      data: servicio 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message 
    });
  }
};

// Crear un nuevo servicio suplementario de abonado
const createServicioSuplAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newServicio = await SuplAbonado.createServicioSuplAbonado(req.body);
    res.status(201).json({ 
      status: 'si', 
      message: 'Servicio suplementario de abonado creado', 
      data: newServicio });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Actualizar un servicio suplementario de abonado
const updateServicioSuplAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedServicio = await SuplAbonado.updateServicioSuplAbonado(req.params['abonado-number'], req.params['service-code'], req.body);
    if (!updatedServicio) {
      return res.json({ 
        status: 'no', 
        message: 'No existe ese servicio suplementario para abonados' });
    }
    res.json({ 
      status: 'si', 
      message: 'Servicio suplementario de abonado actualizado', 
      data: updatedServicio });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Eliminar un servicio suplementario de abonado
const deleteServicioSuplAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    await SuplAbonado.deleteServicioSuplAbonado(req.params['abonado-number'], req.params['service-code']);
    res.status(200).send({ 
      status: 'si', 
      message: 'Servicio suplementario de abonado eliminado' });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

module.exports = { 
  getServicioSuplAbonadoController, 
  createServicioSuplAbonadoController, 
  updateServicioSuplAbonadoController, 
  deleteServicioSuplAbonadoController 
};
