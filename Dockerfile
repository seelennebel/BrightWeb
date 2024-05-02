FROM node:latest

WORKDIR /app/backend

COPY back_end/package*.json ./

RUN npm install

COPY back_end/ ./

WORKDIR /app/frontend

COPY /front_end/package*.json ./

RUN npm install

COPY /front_end/ ./

RUN npm run build

ENV PORT=8080

EXPOSE 8080

WORKDIR /app/backend

CMD ["node", "server.js"]

