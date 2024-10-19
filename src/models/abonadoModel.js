const { pool } = require('../db.js');

// Obtener un abonado
const getAbonadoById = async (num_abonado) => {
  const res = await pool.query('SELECT * FROM ga_abocel WHERE num_abonado = $1', [num_abonado]);
  return res.rows[0];
};

// Crear un abonado
const createAbonado = async (abonado) => {
  const { 
    num_abonado, num_celular, cod_cliente, cod_producto, 
    cod_tipcontrato, des_tipcontrato, fec_desde, fec_hasta, 
    ind_contseg, ind_contcel, ind_comodato, canal_vta, 
    meses_minimo, ind_procequi, ind_preciolista, ind_gmc 
  } = abonado;

  const res = await pool.query(
    `INSERT INTO ga_abocel (
      num_abonado, num_celular, cod_cliente, cod_producto, 
      cod_tipcontrato, des_tipcontrato, fec_desde, fec_hasta, 
      ind_contseg, ind_contcel, ind_comodato, canal_vta, 
      meses_minimo, ind_procequi, ind_preciolista, ind_gmc
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
    [
      num_abonado, num_celular, cod_cliente, cod_producto, 
      cod_tipcontrato, des_tipcontrato, fec_desde, fec_hasta, 
      ind_contseg, ind_contcel, ind_comodato, canal_vta, 
      meses_minimo, ind_procequi, ind_preciolista, ind_gmc
    ]
  );

  return res.rows[0];
};

// Actualizar un abonado
const updateAbonado = async (num_abonado, abonado) => {
  const { num_celular, cod_cliente } = abonado;
  const res = await pool.query(
    'UPDATE ga_abocel SET num_celular = $1, cod_cliente = $2 WHERE num_abonado = $3 RETURNING *',
    [num_celular, cod_cliente, num_abonado]
  );
  return res.rows[0];
};

// Eliminar un abonado
const deleteAbonado = async (num_abonado) => {
  await pool.query('DELETE FROM ga_abocel WHERE num_abonado = $1', [num_abonado]);
};

module.exports = { getAbonadoById, createAbonado, updateAbonado, deleteAbonado };
