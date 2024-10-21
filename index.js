const express = require('express');
const abonadoRoutes = require('./src/routes/abonadoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const productoRoutes = require('./src/routes/productoRoutes');
const servSuplRoutes = require('./src/routes/servSuplRoutes');
const servSuplAbonadoRoutes = require('./src/routes/servSuplAbonadoRoutes');
const { checkConnection } = require('./src/db'); 

const app = express();
app.use(express.json());

// Verificación de conexión a la base de datos
const checkDB = async () => {
  const connected = await checkConnection();
  if (connected) {
    console.log('✅ Conexión a la base de datos establecida');
    return true;
  } else {
    console.error('❌ Error al conectar a la base de datos');
    return false;
  }
};

// Iniciar el servidor solo si la conexión a la base de datos es exitosa
const startServer = async () => {
  const dbConnected = await checkDB();
  if (!dbConnected) {
    console.error('🚨 Servidor detenido debido a problemas de conexión a la base de datos');
    return;  // Detener el arranque del servidor si no se conecta a la base de datos
  }

  // Iniciar el servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

// Rutas de la API
app.use('/suscriber-manager-services', abonadoRoutes);
app.use('/customer-manager-services', clienteRoutes);
app.use('/product-manager-services', productoRoutes);
app.use('/supplementary-services', servSuplRoutes);
app.use('/abonado-supplementary-services', servSuplAbonadoRoutes);

// Llamar a la función para iniciar el servidor
startServer();