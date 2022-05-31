FROM node:16-buster-slim

WORKDIR /app

COPY package.json .

RUN yarn

COPY app.js .
COPY Dockerfile .
COPY .gitignore .

EXPOSE 3000

CMD [ "node","app.js" ]