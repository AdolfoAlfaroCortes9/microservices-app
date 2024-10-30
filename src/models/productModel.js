const { pool } = require('../db');

// Obtener un producto por su código
const getProduct = async (cod_producto) => {
  const res = await pool.query('SELECT * FROM ge_productos WHERE cod_producto = $1', [cod_producto]);
  return res.rows[0];
};

module.exports = { 
  getProduct
};