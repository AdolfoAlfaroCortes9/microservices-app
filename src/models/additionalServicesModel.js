const { pool } = require('../db');

// Obtener un servicio suplementario por su código de producto y código de servicio
const getAdditionalService = async (cod_producto, cod_servicio) => {
  const res = await pool.query('SELECT * FROM ga_servsupl WHERE cod_producto = $1 AND cod_servicio = $2', [cod_producto, cod_servicio]);
  return res.rows[0];
};

// Obtener un servicio suplementario por su código de servicio
const searchService = async (cod_servicio) => {
  const res = await pool.query('SELECT * FROM ga_servsupl WHERE cod_servicio = $1', [cod_servicio]);
  return res.rows[0];
}

module.exports = { 
  getAdditionalService,
  searchService 
};