# Crear una imagen de Node basado en una imagen oficial de dockerhub
FROM node:8
# Crear un directorio donde se va a alojar el codigo de nuestra aplicación
# Agregamos un usuario
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/usr/src/app
RUN mkdir $HOME
WORKDIR $HOME

# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli && npm cache clean

# Puerto entorno dev
EXPOSE 4200
# Puerto livereload
EXPOSE 49153
# Puerto Test
EXPOSE 9876
# Puerto e2e
EXPOSE 49152 