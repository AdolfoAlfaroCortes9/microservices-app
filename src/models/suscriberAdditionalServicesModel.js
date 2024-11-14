const { pool } = require('../db');

// Función para formatear las fechas en "YYYY-MM-DD"
const formatDates = (data) => {
  if (!data) return data;
  return {
    ...data,
    fec_altabd: data.fec_altabd ? data.fec_altabd.toISOString().split('T')[0] : null,
    fec_altacen: data.fec_altacen ? data.fec_altacen.toISOString().split('T')[0] : null,
    fec_bajabd: data.fec_bajabd ? data.fec_bajabd.toISOString().split('T')[0] : null,
    fec_bajacen: data.fec_bajacen ? data.fec_bajacen.toISOString().split('T')[0] : null,
  };
};

// Obtener un servicio suplementario de abonado por número de abonado y código de servicio
const getSuscriberAdditionalService = async (num_abonado, cod_servicio) => {
  const query = `CALL sp_get_suscriber_additional_service($1, $2)`;
  const res = await pool.query(query, [num_abonado, cod_servicio]);
  return formatDates(res.rows[0]);
};

// Obtener código de servicio, fecha de alta y código de servicio suplementario de un abonado en específico
const getSpecificSubscriberService = async (num_abonado) => {
  const query = `CALL sp_get_specific_subscriber_service($1)`;
  const result = await pool.query(query, [num_abonado]);
  return result.rows.map(formatDates);
};

module.exports = {  
  getSuscriberAdditionalService,
  getSpecificSubscriberService
};
