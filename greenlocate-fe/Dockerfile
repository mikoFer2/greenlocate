# NPM 
FROM node:lts-alpine3.20
RUN mkdir -p /opt/app/greenlocate-fe
COPY . /opt/app/greenlocate-fe
WORKDIR /opt/app/greenlocate-fe
RUN npm install
RUN npm install
RUN npm install -g @ionic/cli
RUN ionic build --prod