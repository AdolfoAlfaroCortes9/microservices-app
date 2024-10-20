require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,  // Este debe ser el puerto interno de PostgreSQL, generalmente 5432
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Función para verificar la conexión a la base de datos
const checkConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Conexión a la base de datos establecida');
    client.release();
    return true;
  } catch (err) {
    console.error('Error al conectar a la base de datos', err);
    return false;
  }
};

module.exports = { pool, checkConnection };