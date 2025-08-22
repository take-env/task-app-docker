FROM node:20-alpine

WORKDIR /var/www/client

COPY ./client/package*.json ./

RUN npm install --legacy-peer-deps

COPY ./client .

CMD ["npm", "run", "dev"]
