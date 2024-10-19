const Abonado = require('../models/abonadoModel.js');
const { checkConnection } = require('../db.js');

// Obtener un abonado
const getAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const abonado = await Abonado.getAbonadoById(req.query['suscriber-number']);
    if (!abonado) {
      return res.json({ status: 'no', message: 'No existe ese dato en la tabla ga_abocel' });
    }
    res.json({ status: 'si', message: 'Abonado encontrado', data: abonado });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Crear un abonado
const createAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newAbonado = await Abonado.createAbonado(req.body);
    res.status(201).json({ status: 'si', message: 'Abonado creado', data: newAbonado });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Actualizar un abonado existente
const updateAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedAbonado = await Abonado.updateAbonado(req.params['suscriber-number'], req.body);
    if (!updatedAbonado) {
      return res.json({ status: 'no', message: 'No existe ese dato en la tabla GA_ABOCEL' });
    }
    res.json({ status: 'si', message: 'Abonado actualizado', data: updatedAbonado });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Eliminar un abonado
const deleteAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    await Abonado.deleteAbonado(req.params['suscriber-number']);
    res.status(204).send({ status: 'si', message: 'Abonado eliminado' });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

module.exports = { getAbonadoController, createAbonadoController, updateAbonadoController, deleteAbonadoController };
