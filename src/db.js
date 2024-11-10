const { Pool } = require('pg');

// Configuración de la conexión a la base de datos utilizando Doppler
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false, // Configuración opcional, útil si Doppler maneja la SSL
  },
});

// Función para verificar la conexión a la base de datos
const checkConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Connection to the database established');
    client.release();
    return true;
  } catch (err) {
    console.error('❌ Error connecting to the database:', err.message);
    return false;
  }
};

module.exports = { pool, checkConnection };
