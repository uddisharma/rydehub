FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install prisma --save-dev

RUN npx prisma generate

RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["npm", "start"]
