const Abonado = require('../models/abonadoModel');
const { checkConnection } = require('../db');

// Obtener un abonado
const getAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }
  try {
    const abonado = await Abonado.getAbonado(req.query['suscriber-number']);
    if (!abonado) {
      return res.json({ 
        status: 'no', 
        message: 'No existe el abonado' 
      });
    }
    res.json({ 
      status: 'si', 
      message: 'Abonado encontrado', 
      data: abonado 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message 
    });
  }
};

//Crear un abonado
const createAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newAbonado = await Abonado.createAbonado(req.body);
    res.status(201).json({
      status: 'si', 
      message: 'Abonado creado', 
      data: newAbonado });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Actualizar un abonado existente usando query string
const updateAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedAbonado = await Abonado.updateAbonado(req.query['suscriber-number'], req.body); // Usamos query string
    if (!updatedAbonado) {
      return res.json({ 
        status: 'no', 
        message: 'No existe ese abonado en la base de datos' }
      );
    }
    res.json({ 
      status: 'si', 
      message: 'Abonado actualizado', 
      data: updatedAbonado });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Eliminar un abonado usando query string
const deleteAbonadoController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const deletedAbonado = await Abonado.deleteAbonado(req.query['suscriber-number']); 
    if (!deletedAbonado) {
      return res.status(404).json({ 
        status: 'no', 
        message: 'No existe ese abonado en la base de datos' });
    }
    res.status(200).json({ 
      status: 'si', 
      message: 'Abonado eliminado' });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

module.exports = { 
  getAbonadoController, 
  createAbonadoController, 
  updateAbonadoController, 
  deleteAbonadoController 
};