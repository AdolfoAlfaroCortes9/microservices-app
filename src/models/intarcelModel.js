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
  const res = await pool.query(
    'SELECT * FROM ga_intarcel WHERE num_abonado = $1',
    [num_abonado]
  );
  return res.rows.map(formatDates);
};

// Obtener detalles de un cliente específico por código de cliente
const getCustomerDetails = async (cod_cliente) => {
  const res = await pool.query(
    'SELECT * FROM ga_intarcel WHERE cod_cliente = $1',
    [cod_cliente]
  );
  return res.rows.map(formatDates);
};

module.exports = {  
  getSubscriberDetails,
  getCustomerDetails
};
