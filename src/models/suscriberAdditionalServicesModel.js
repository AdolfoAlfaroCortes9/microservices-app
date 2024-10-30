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
  const res = await pool.query(
    'SELECT * FROM ga_servsuplabo WHERE num_abonado = $1 AND cod_servicio = $2',
    [num_abonado, cod_servicio]
  );
  return formatDates(res.rows[0]); // Formatea las fechas antes de devolver
};

// Obtener código de servicio, fecha de alta y código de servicio suplementario de un abonado en específico
const getSpecificSubscriberService = async (num_abonado) => {
  const query = `
    SELECT cod_servicio, fec_altabd, cod_servsupl
    FROM ga_servsuplabo
    WHERE num_abonado = $1
  `;
  const result = await pool.query(query, [num_abonado]);
  return result.rows.map(formatDates); // Formatea las fechas para cada fila
};

module.exports = {  
  getSuscriberAdditionalService,
  getSpecificSubscriberService
};