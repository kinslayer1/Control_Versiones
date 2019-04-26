# Crear una imagen de Node basado en una imagen oficial de dockerhub
FROM node:6
# Crear un directorio donde se va a alojar el codigo de nuestra aplicación
RUN mkdir -p /usr/src/app
# Cambiar el directorio para que los comandos se ejecuten dentro del nuevo directorio
WORKDIR /usr/src/app
# Copiar las definiciones de dependencia
COPY package.json /usr/src/app
# Instalar Dependencias
RUN npm install
# Copiar todos los fuentes necesarios para correr la aplicación
COPY . /usr/src/app
# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 8888
# Desplegar la aplicación
CMD ["npm", "start"]