const { pool } = require('../db');

// Obtener un producto por su código
const getProduct = async (cod_producto) => {
  const query = `CALL sp_get_product($1)`;
  const res = await pool.query(query, [cod_producto]);
  return res.rows[0];
};

module.exports = { 
  getProduct
};
