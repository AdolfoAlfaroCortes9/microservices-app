const Cliente = require('../models/clienteModel');
const { checkConnection } = require('../db');

// Obtener un cliente por su código
const getClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'no', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }
  try {
    const cliente = await Cliente.getCliente(req.query['customer-code']);
    if (!cliente) {
      return res.json({ 
        status: 'no', 
        message: 'No existe ese dato en la tabla GE_CLIENTES' });
    }
    res.json({ 
      status: 'si', 
      message: 'Cliente encontrado', 
      data: cliente });
  } catch (error) {
    res.status(500).json({ 
      status: 'no', 
      message: error.message });
  }
};

// Crear un nuevo cliente
const createClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const newCliente = await Cliente.createCliente(req.body);
    res.status(201).json({ status: 'si', message: 'Cliente creado', data: newCliente });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Actualizar un cliente existente
const updateClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedCliente = await Cliente.updateCliente(req.params['customer-code'], req.body);
    if (!updatedCliente) {
      return res.json({ status: 'no', message: 'No existe ese dato en la tabla GE_CLIENTES' });
    }
    res.json({ status: 'si', message: 'Cliente actualizado', data: updatedCliente });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

// Eliminar un cliente
const deleteClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ status: 'no', message: 'No se pudo conectar a la base de datos' });
  }
  try {
    await Cliente.deleteCliente(req.params['customer-code']);
    res.status(204).send({ status: 'si', message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ status: 'no', message: error.message });
  }
};

module.exports = { 
  getClienteController, 
  createClienteController, 
  updateClienteController, 
  deleteClienteController 
};
