const { pool } = require('../db');

// Obtener un abonado
const getSuscriber = async (num_abonado) => {
  const res = await pool.query('SELECT * FROM ga_abocel WHERE num_abonado = $1', [num_abonado]);
  return res.rows[0];
};

module.exports = {getSuscriber};
