FROM node:12-alpine
MAINTAINER Dogukan Cagatay <dcagatay@gmail.com>

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY index.js /app/

CMD ["npm", "start"]
