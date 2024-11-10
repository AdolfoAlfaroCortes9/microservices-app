const express = require('express');
const suscriberRoutes = require('./src/routes/suscriberRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const productRoutes = require('./src/routes/productRoutes');
const additionalServicesRoutes = require('./src/routes/additionalServicesRoutes');
const suscriberAdditionalServicesRoutes = require('./src/routes/suscriberAdditionalServicesRoutes');
const pricingPeriodRoutes = require('./src/routes/pricingPeriodRoutes');
const { checkConnection } = require('./src/db');

const app = express();
app.use(express.json());

// Verificación de conexión a la base de datos con manejo de errores
const checkDB = async () => {
  try {
    const connected = await checkConnection();
    if (connected) {
      console.log('✅ Connection to the database established');
      return true;
    } else {
      console.error('❌ Error connecting to the database');
      return false;
    }
  } catch (error) {
    console.error('❌ Error during database check:', error.message);
    return false;
  }
};

// Iniciar el servidor solo si la conexión a la base de datos es exitosa
const startServer = async () => {
  try {
    const dbConnected = await checkDB();
    if (!dbConnected) {
      console.error('🚨 Server stopped due to database connection problems');
      process.exit(1); // Termina el proceso si no se conecta a la base de datos
    }

    // Iniciar el servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1); // Termina el proceso si hay un error general al iniciar
  }
};

// Rutas de la API
app.use('/suscriber-manager-services', suscriberRoutes);
app.use('/customer-manager-services', customerRoutes);
app.use('/product-manager-services', productRoutes);
app.use('/additional-services', additionalServicesRoutes);
app.use('/suscriber-additional-services', suscriberAdditionalServicesRoutes);
app.use('/pricing-period-services', pricingPeriodRoutes);

// Llamar a la función para iniciar el servidor
startServer();