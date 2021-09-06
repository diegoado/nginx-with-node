FROM node:alpine

ENV WAIT_VERSION 2.9.0

WORKDIR /home/node/app

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait ./wait

RUN npm install && chmod +x ./wait

EXPOSE 3000

CMD ./wait && npm start