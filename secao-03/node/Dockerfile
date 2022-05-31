FROM node:16-buster-slim

WORKDIR /app

COPY package.json .

RUN yarn

COPY app.js .
COPY Dockerfile .

EXPOSE 3001

CMD [ "node","app.js" ]