FROM node:22-alpine

WORKDIR /app

COPY . .

RUN yarn install --ignore-scripts

# REMOVING & REINSTALLING BCRYPT DUE TO BUG WITH DOCKER
RUN yarn remove bcrypt @types/bcrypt
RUN yarn add bcrypt
RUN yarn add -D @types/bcrypt

RUN yarn build

EXPOSE 9090

CMD ["node", "./dist/server.js"]
