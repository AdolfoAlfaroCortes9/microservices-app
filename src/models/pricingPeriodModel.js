const { pool } = require('../db');

// Función para formatear las fechas en "YYYY-MM-DD"
const formatDates = (data) => {
  if (!data) return data;
  return {
    ...data,
    fec_desde: data.fec_desde ? data.fec_desde.toISOString().split('T')[0] : null,
    fec_hasta: data.fec_hasta ? data.fec_hasta.toISOString().split('T')[0] : null,
  };
};

// Obtener detalles de un abonado específico por número de abonado
const getSubscriberDetails = async (num_abonado) => {
  const query = `CALL sp_get_subscriber_details($1)`;
  const res = await pool.query(query, [num_abonado]);
  return res.rows.map(formatDates);
};

module.exports = {  
  getSubscriberDetails
};
