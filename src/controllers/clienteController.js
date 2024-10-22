const Cliente = require('../models/clienteModel');
const { checkConnection } = require('../db');

// Obtener un cliente por su código
const getClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }
  try {
    const cliente = await Cliente.getCliente(req.query['customer-code']);
    if (!cliente) {
      return res.json({ 
        status: 'denied', 
        message: 'No existe ese dato en la tabla GE_CLIENTES' });
    }
    res.json({ 
      status: 'success', 
      message: 'Cliente encontrado', 
      data: cliente });
  } catch (error) {
    res.status(500).json({ 
      status: 'denied', 
      message: error.message });
  }
};

// Crear un nuevo cliente
const createClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }

  try {
    // Verificar si el cliente ya existe
    const existingCliente = await Cliente.getClienteById(req.body.cod_cliente); // Suponiendo que 'cod_cliente' es único
    if (existingCliente) {
      return res.status(409).json({
        status: 'denied', 
        message: 'El cliente ya existe en la base de datos'
      });
    }

    // Crear el cliente si no existe
    const newCliente = await Cliente.createCliente(req.body);
    res.status(201).json({
      status: 'success', 
      message: 'Cliente creado', 
      data: newCliente
    });

  } catch (error) {
    res.status(500).json({ 
      status: 'denied', 
      message: error.message 
    });
  }
};

// Actualizar un cliente existente
const updateClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' });
  }
  try {
    const updatedCliente = await Cliente.updateCliente(req.params['customer-code'], req.body);
    if (!updatedCliente) {
      return res.json({ 
        status: 'denied', 
        message: 'No existe ese cliente' });
    }
    res.json({ 
      status: 'success', 
      message: 'Cliente actualizado', 
      data: updatedCliente });
  } catch (error) {
    res.status(500).json({ 
      status: 'denied', 
      message: error.message });
  }
};

// Eliminar un cliente
const deleteClienteController = async (req, res) => {
  const isConnected = await checkConnection();
  if (!isConnected) {
    return res.json({ 
      status: 'denied', 
      message: 'No se pudo conectar a la base de datos' 
    });
  }
  try {
    const deletedCliente = await Cliente.deleteCliente(req.params['customer-code']); 
    if (!deletedCliente) {
      return res.status(404).json({ 
        status: 'denied', 
        message: 'No existe el cliente ingresado' 
      });
    }
    res.status(200).json({ 
      status: 'success', 
      message: 'Cliente eliminado', 
      data: deletedCliente });
  } catch (error) {
    res.status(500).json({ 
      status: 'denied', 
      message: error.message });
  }
};

module.exports = { 
  getClienteController, 
  createClienteController, 
  updateClienteController, 
  deleteClienteController 
};
