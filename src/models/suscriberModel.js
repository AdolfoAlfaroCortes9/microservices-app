const { pool } = require('../db');

// Obtener un abonado
const getSuscriber = async (num_abonado) => {
  const query = `SELECT * FROM sp_get_suscriber($1)`; 
  const res = await pool.query(query, [num_abonado]);
  return res.rows[0];
};

module.exports = { getSuscriber }; 
