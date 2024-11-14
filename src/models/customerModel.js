const { pool } = require('../db');

// Obtener un cliente por su código
const getCustomer = async (cod_cliente) => {
  const query = `CALL sp_get_customer($1)`;
  const res = await pool.query(query, [cod_cliente]);
  return res.rows[0];
};

module.exports = {  
  getCustomer 
};
