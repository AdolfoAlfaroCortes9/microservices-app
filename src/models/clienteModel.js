const { pool } = require('../db');

// Obtener un cliente por su código
const getCliente = async (cod_cliente) => {
  const res = await pool.query('SELECT * FROM ge_clientes WHERE cod_cliente = $1', [cod_cliente]);
  return res.rows[0];
};

// Crear un nuevo cliente
const createCliente = async (cliente) => {
  const {
    cod_cliente, nom_cliente, cod_tipident, num_ident, 
    cod_calclien, ind_situacion, fec_alta, ind_factur, 
    ind_traspaso, ind_agente, fec_ultmod, num_fax, 
    ind_mandato, nom_usuara, ind_alta, cod_cuenta, 
    ind_acepvent, cod_abc, cod_123, cod_actividad, 
    cod_pais
  } = cliente;

  const res = await pool.query(
    `INSERT INTO ge_clientes (
      cod_cliente, nom_cliente, cod_tipident, num_ident, 
      cod_calclien, ind_situacion, fec_alta, ind_factur, 
      ind_traspaso, ind_agente, fec_ultmod, num_fax, 
      ind_mandato, nom_usuara, ind_alta, cod_cuenta, 
      ind_acepvent, cod_abc, cod_123, cod_actividad, 
      cod_pais
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *`,
    [
      cod_cliente, nom_cliente, cod_tipident, num_ident, 
      cod_calclien, ind_situacion, fec_alta, ind_factur, 
      ind_traspaso, ind_agente, fec_ultmod, num_fax, 
      ind_mandato, nom_usuara, ind_alta, cod_cuenta, 
      ind_acepvent, cod_abc, cod_123, cod_actividad, 
      cod_pais
    ]
  );

  return res.rows[0];
};

// Actualizar un cliente existente
const updateCliente = async (cod_cliente, cliente) => {
  const { nom_cliente, cod_tipident, num_ident } = cliente;
  const res = await pool.query(
    'UPDATE ge_clientes SET nom_cliente = $2, cod_tipident = $3 WHERE cod_cliente = $1 RETURNING *',
    [cod_cliente, nom_cliente, cod_tipident, num_ident]
  );
  return res.rows[0];
};

// Eliminar un cliente
const deleteCliente = async (cod_cliente) => {
  await pool.query('DELETE FROM ge_clientes WHERE cod_cliente = $1', [cod_cliente]);
};

module.exports = {  
  getCliente, 
  createCliente, 
  updateCliente, 
  deleteCliente 
};
