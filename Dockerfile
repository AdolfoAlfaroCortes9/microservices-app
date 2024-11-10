# Imagen base de Node.js
FROM node:14

# Instalación de Doppler CLI
RUN apt-get update && apt-get install -y curl && \
    curl -Ls https://cli.doppler.com/install.sh | sh

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

# Comando que ejecuta la aplicación utilizando Doppler
CMD ["doppler", "run", "--", "node", "index.js"]