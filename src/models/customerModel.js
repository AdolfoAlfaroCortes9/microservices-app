const { pool } = require('../db');

// Obtener un cliente por su código
const getCustomer = async (cod_cliente) => {
  const res = await pool.query('SELECT * FROM ge_clientes WHERE cod_cliente = $1', [cod_cliente]);
  return res.rows[0];
};

module.exports = {  
  getCustomer 
};
