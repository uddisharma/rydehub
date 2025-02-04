FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN  yarn install

EXPOSE 3000

CMD ["npm", "run", "dev:docker"]