const { pool } = require('../db.js');

// Obtener todos los servicios suplementarios de abonados
const getAllServiciosSuplAbonados = async () => {
  const res = await pool.query('SELECT * FROM ga_servsuplabo');
  return res.rows;
};

// Obtener un servicio suplementario de abonado por número de abonado y código de servicio
const getServicioSuplAbonadoById = async (num_abonado, cod_servicio) => {
  const res = await pool.query('SELECT * FROM ga_servsuplabo WHERE num_abonado = $1 AND cod_servicio = $2', [num_abonado, cod_servicio]);
  return res.rows[0];
};

// Crear un nuevo servicio suplementario de abonado
const createServicioSuplAbonado = async (suplementarioAbonado) => {
  const {
    num_abonado, cod_servicio, fec_altabd, cod_servsupl, 
    cod_nivel, cod_producto, num_terminal, nom_usuara, 
    ind_estado, fec_altacen, fec_bajabd, fec_bajacen, 
    cod_concepto, num_diasnum, cod_prioridad, ind_desborde
  } = suplementarioAbonado;

  const res = await pool.query(
    `INSERT INTO ga_servsuplabo (
      num_abonado, cod_servicio, fec_altabd, cod_servsupl, 
      cod_nivel, cod_producto, num_terminal, nom_usuara, 
      ind_estado, fec_altacen, fec_bajabd, fec_bajacen, 
      cod_concepto, num_diasnum, cod_prioridad, ind_desborde
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
    [
      num_abonado, cod_servicio, fec_altabd, cod_servsupl, 
      cod_nivel, cod_producto, num_terminal, nom_usuara, 
      ind_estado, fec_altacen, fec_bajabd, fec_bajacen, 
      cod_concepto, num_diasnum, cod_prioridad, ind_desborde
    ]
  );

  return res.rows[0];
};

// Actualizar un servicio suplementario de abonado
const updateServicioSuplAbonado = async (num_abonado, cod_servicio, suplementarioAbonado) => {
  const { fec_altabd, cod_servsupl, cod_nivel, cod_producto, num_terminal } = suplementarioAbonado;
  const res = await pool.query(
    'UPDATE ga_servsuplabo SET num_abonado = $1, cod_servicio = $2, fec_altabd = $3, cod_servsupl = $4, cod_nivel = $5 WHERE cod_producto = $6 AND num_terminal = $7 RETURNING *',
    [num_abonado, cod_servicio, fec_altabd, cod_servsupl, cod_nivel, cod_producto, num_terminal]
  );
  return res.rows[0];
};

// Eliminar un servicio suplementario de abonado
const deleteServicioSuplAbonado = async (num_abonado, cod_servicio) => {
  await pool.query('DELETE FROM ga_servsuplabo WHERE num_abonado = $1 AND cod_servicio = $2', [num_abonado, cod_servicio]);
};

module.exports = { 
  getAllServiciosSuplAbonados, 
  getServicioSuplAbonadoById, 
  createServicioSuplAbonado, 
  updateServicioSuplAbonado, 
  deleteServicioSuplAbonado 
};
