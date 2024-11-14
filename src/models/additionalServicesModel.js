const { pool } = require('../db');

// Obtener un servicio suplementario por su código de producto y código de servicio
const getAdditionalService = async (cod_producto, cod_servicio) => {
  const query = `CALL sp_get_additional_service($1, $2)`;
  const res = await pool.query(query, [cod_producto, cod_servicio]);
  return res.rows[0];
};

// Obtener un servicio suplementario por su código de servicio
const searchService = async (cod_servicio) => {
  const query = `CALL sp_search_service($1)`;
  const res = await pool.query(query, [cod_servicio]);
  return res.rows[0];
};

module.exports = { 
  getAdditionalService,
  searchService 
};