FROM node:18

WORKDIR /ms_auth

COPY  package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm","run","start:dev" ]