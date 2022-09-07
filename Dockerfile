FROM node:16.15.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD [ "yarn", "start" ]
