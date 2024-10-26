const { pool } = require('../db');

// Obtener un abonado
const getAbonado = async (num_abonado) => {
  const res = await pool.query('SELECT * FROM ga_abocel WHERE num_abonado = $1', [num_abonado]);
  return res.rows[0];
};

// Crear un abonado
const createAbonado = async (abonado) => {
  const {   
    num_abonado, num_celular, cod_producto, cod_cliente, cod_cuenta, cod_subcuenta, cod_usuario, 
    cod_region, cod_provincia, cod_ciudad, cod_celda, cod_central, cod_uso, cod_situacion, ind_procalta, 
    ind_procequi, cod_vendedor, cod_vendedor_agente, tip_plantarif, tip_terminal, cod_plantarif, 
    cod_cargobasico, cod_planserv, cod_limconsumo, num_serie, num_seriehex, nom_usuarora, fec_alta, 
    num_percontrato, cod_estado, num_seriemec, cod_holding, cod_empresa, cod_grpserv, ind_supertel, num_telefija, 
    cod_opredfija, cod_carrier, ind_prepago, ind_plexsys, cod_central_plex, num_celular_plex, num_venta, cod_modventa, 
    cod_tipcontrato, num_contrato, num_anexo, fec_cumplan, cod_credmor, cod_credcon, cod_ciclo, ind_factur, ind_suspen, 
    ind_rehabi, ind_insguias, fec_fincontra, fec_recdocum, fec_cumplimen, fec_acepventa, fec_actcen, fec_baja, fec_bajacen, 
    fec_ultmod, cod_causabaja, num_personal, ind_seguro, clase_servicio, perfil_abonado, num_min, cod_vendealer, ind_disp, 
    cod_password, ind_password, cod_afinidad, fec_prorroga, ind_eqprestado, flg_contdigi, fec_altantras, cod_indemnizacion, 
    num_imei, cod_tecnologia, num_min_mdn, fec_activacion, ind_telefono, cod_oficina_principal, cod_causa_venta, cod_operacion, 
    cod_prestacion, mto_valor_referencia, cod_moneda, tipo_primariacarrier, obs_instancia 
  } = abonado;

  const res = await pool.query(
    `INSERT INTO ga_abocel (
      num_abonado, num_celular, cod_producto, cod_cliente, cod_cuenta, cod_subcuenta, cod_usuario, 
      cod_region, cod_provincia, cod_ciudad, cod_celda, cod_central, cod_uso, cod_situacion, ind_procalta, 
      ind_procequi, cod_vendedor, cod_vendedor_agente, tip_plantarif, tip_terminal, cod_plantarif, 
      cod_cargobasico, cod_planserv, cod_limconsumo, num_serie, num_seriehex, nom_usuarora, fec_alta, 
      num_percontrato, cod_estado, num_seriemec, cod_holding, cod_empresa, cod_grpserv, ind_supertel, num_telefija, 
      cod_opredfija, cod_carrier, ind_prepago, ind_plexsys, cod_central_plex, num_celular_plex, num_venta, cod_modventa, 
      cod_tipcontrato, num_contrato, num_anexo, fec_cumplan, cod_credmor, cod_credcon, cod_ciclo, ind_factur, ind_suspen, 
      ind_rehabi, ind_insguias, fec_fincontra, fec_recdocum, fec_cumplimen, fec_acepventa, fec_actcen, fec_baja, fec_bajacen, 
      fec_ultmod, cod_causabaja, num_personal, ind_seguro, clase_servicio, perfil_abonado, num_min, cod_vendealer, ind_disp, 
      cod_password, ind_password, cod_afinidad, fec_prorroga, ind_eqprestado, flg_contdigi, fec_altantras, cod_indemnizacion, 
      num_imei, cod_tecnologia, num_min_mdn, fec_activacion, ind_telefono, cod_oficina_principal, cod_causa_venta, cod_operacion, 
      cod_prestacion, mto_valor_referencia, cod_moneda, tipo_primariacarrier, obs_instancia
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, 
      $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, 
      $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, 
      $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, 
      $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77, 
      $78, $79, $80, $81, $82, $83, $84, $85, $86, $87, $88, $89, $90, $91
    ) RETURNING *`,
    [
      num_abonado, num_celular, cod_producto, cod_cliente, cod_cuenta, cod_subcuenta, cod_usuario, 
      cod_region, cod_provincia, cod_ciudad, cod_celda, cod_central, cod_uso, cod_situacion, ind_procalta, 
      ind_procequi, cod_vendedor, cod_vendedor_agente, tip_plantarif, tip_terminal, cod_plantarif, 
      cod_cargobasico, cod_planserv, cod_limconsumo, num_serie, num_seriehex, nom_usuarora, fec_alta, 
      num_percontrato, cod_estado, num_seriemec, cod_holding, cod_empresa, cod_grpserv, ind_supertel, num_telefija, 
      cod_opredfija, cod_carrier, ind_prepago, ind_plexsys, cod_central_plex, num_celular_plex, num_venta, cod_modventa, 
      cod_tipcontrato, num_contrato, num_anexo, fec_cumplan, cod_credmor, cod_credcon, cod_ciclo, ind_factur, ind_suspen, 
      ind_rehabi, ind_insguias, fec_fincontra, fec_recdocum, fec_cumplimen, fec_acepventa, fec_actcen, fec_baja, fec_bajacen, 
      fec_ultmod, cod_causabaja, num_personal, ind_seguro, clase_servicio, perfil_abonado, num_min, cod_vendealer, ind_disp, 
      cod_password, ind_password, cod_afinidad, fec_prorroga, ind_eqprestado, flg_contdigi, fec_altantras, cod_indemnizacion, 
      num_imei, cod_tecnologia, num_min_mdn, fec_activacion, ind_telefono, cod_oficina_principal, cod_causa_venta, cod_operacion, 
      cod_prestacion, mto_valor_referencia, cod_moneda, tipo_primariacarrier, obs_instancia
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

module.exports = { getAbonado, createAbonado, updateAbonado, deleteAbonado };
