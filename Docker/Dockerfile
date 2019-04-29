# Crear una imagen de Node basado en una imagen oficial de dockerhub
FROM node:8
# Crear un directorio donde se va a alojar el codigo de nuestra aplicación
RUN mkdir -p /usr/src/app
# Cambiar el directorio para que los comandos se ejecuten dentro del nuevo directorio
WORKDIR /usr/src/app
# proxy
RUN npm config set proxy http://roblesjf:2019ABri@192.168.126.10:8080
RUN npm config set https-proxy http://roblesjf:2019ABri@192.168.126.10:8080
# Instalamos angular cli en nuestra imágen
RUN npm config set strict-ssl false
RUN npm install
RUN npm install -g @angular/cli && npm cache clean
RUN npm config set strict-ssl true
# Puerto entorno dev
EXPOSE 8888