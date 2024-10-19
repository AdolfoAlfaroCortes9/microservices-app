const express = require('express');
const abonadoRoutes = require('./src/routes/abonadoRoutes.js');
const clienteRoutes = require('./src/routes/clienteRoutes.js');
const productoRoutes = require('./src/routes/productoRoutes.js');
const servSuplRoutes = require('./src/routes/servSuplRoutes.js');
const servSuplAbonadoRoutes = require('./src/routes/servSuplAbonadoRoutes.js');

const app = express();
app.use(express.json());

app.use('/suscriber-manager-services', abonadoRoutes);
app.use('/customer-manager-services', clienteRoutes);
app.use('/product-manager-services', productoRoutes);
app.use('/supplementary-services', servSuplRoutes);
app.use('/abonado-supplementary-services', servSuplAbonadoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
