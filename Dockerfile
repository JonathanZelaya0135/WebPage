FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN sudo npm install --unsafe-perm=true --allow-root

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]