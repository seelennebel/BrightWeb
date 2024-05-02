FROM node:21

WORKDIR /back_end

COPY /back_end/package*.json /app

RUN npm install

COPY /back_end/ /app

WORKDIR /front_end

COPY /front_end/package*.json /app

RUN npm install

RUN npm run build

COPY /front_end/ /app

ENV PORT = 8000

EXPOSE 8000

WORKDIR /back_end/

CMD ["node", "server.js"]

