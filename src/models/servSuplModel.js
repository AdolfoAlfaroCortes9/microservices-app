const { pool } = require('../db');

// Obtener un servicio suplementario por su código de producto y código de servicio
const getServicioSuplementario = async (cod_producto, cod_servicio) => {
  const res = await pool.query('SELECT * FROM ga_servsupl WHERE cod_producto = $1 AND cod_servicio = $2', [cod_producto, cod_servicio]);
  return res.rows[0];
};

// Crear un nuevo servicio suplementario
const createServicioSuplementario =  async (servicioSuplementario) => {
  const {
    cod_producto, cod_servicio, cod_servsupl, cod_nivel, 
    des_servicio, ind_autman, ind_comerc, ind_pro, 
    ind_central, cod_aplic, ind_traspaso, des_servicio_web, 
    ind_gestor, ind_cobro, ind_prioridad, tip_servicio, 
    ind_tuxedo, ind_infranet, sub_categoria, tip_red, 
    ind_ip, tip_cobro, ind_cobretr, ind_restringible
  } = servicioSuplementario;

  const res = await pool.query(
    `INSERT INTO ga_servsupl (
      cod_producto, cod_servicio, cod_servsupl, cod_nivel, 
      des_servicio, ind_autman, ind_comerc, ind_pro, 
      ind_central, cod_aplic, ind_traspaso, des_servicio_web, 
      ind_gestor, ind_cobro, ind_prioridad, tip_servicio, 
      ind_tuxedo, ind_infranet, sub_categoria, tip_red, 
      ind_ip, tip_cobro, ind_cobretr, ind_restringible
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24) RETURNING *`,
    [
      cod_producto, cod_servicio, cod_servsupl, cod_nivel, 
      des_servicio, ind_autman, ind_comerc, ind_pro, 
      ind_central, cod_aplic, ind_traspaso, des_servicio_web, 
      ind_gestor, ind_cobro, ind_prioridad, tip_servicio, 
      ind_tuxedo, ind_infranet, sub_categoria, tip_red, 
      ind_ip, tip_cobro, ind_cobretr, ind_restringible
    ]
  );

  return res.rows[0];
};

// Actualizar un servicio suplementario
const updateServicioSuplementario = async (cod_producto, cod_servicio, servicioSuplementario) => {
  const { cod_servsupl, cod_nivel, des_servicio, ind_autman } = servicioSuplementario;
  const res = await pool.query(
    'UPDATE ga_servsupl SET cod_servsupl = $1, cod_nivel = $2, DES_SERVICIO = $3, IND_AUTMAN = $4 WHERE cod_producto = $5 AND cod_servicio = $6 RETURNING *',
    [cod_servsupl, cod_nivel, des_servicio, ind_autman, cod_producto, cod_servicio]
  );
  return res.rows[0];
};

// Eliminar un servicio suplementario
const deleteServicioSuplementario = async (cod_producto, cod_servicio) => {
  await pool.query('DELETE FROM ga_servsupl WHERE cod_producto = $1 AND cod_servicio = $2', [cod_producto, cod_servicio]);
};

module.exports = { 
  getServicioSuplementario, 
  createServicioSuplementario, 
  updateServicioSuplementario, 
  deleteServicioSuplementario 
};