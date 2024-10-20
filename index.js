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
  } else {
    console.error('❌ Error al conectar a la base de datos');
  }
};

// Llamar a la función para verificar la conexión en segundo plano
checkDB();

// Rutas de la API
app.use('/suscriber-manager-services', abonadoRoutes);
app.use('/customer-manager-services', clienteRoutes);
app.use('/product-manager-services', productoRoutes);
app.use('/supplementary-services', servSuplRoutes);
app.use('/abonado-supplementary-services', servSuplAbonadoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  // Al iniciar el servidor, hacemos la verificación de la base de datos
  checkDB();
});