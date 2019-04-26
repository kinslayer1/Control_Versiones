# Crear una imagen de Node basado en una imagen oficial de dockerhub
FROM node:8
# Agregar credenciales de Proxy
RUN npm config set proxy http://roblesjf:2019ABri@192.168.126.10:8080
RUN npm config set https-proxy http://roblesjf:2019ABri@192.168.126.10:8080
#Desabilitar SSL
RUN npm config set strict-ssl false
# Agregamos un usuario
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/usr/src/app
RUN mkdir $HOME
WORKDIR $HOME
# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli && npm cache clean
#Habilitar SSL
RUN npm config set strict-ssl true
# Puerto entorno dev
EXPOSE 4200
# Puerto livereload
EXPOSE 49153
# Puerto Test
EXPOSE 9876
# Puerto e2e
EXPOSE 49152 