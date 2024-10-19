# Imagen de Node.js versión 14 
FROM node:14

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia de archivos de definición de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instalación de dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Puerto de la aplicación
EXPOSE 3000

# Comando que ejecuta la aplicación cuando el contenedor se inicia
CMD ["node", "index.js"]

