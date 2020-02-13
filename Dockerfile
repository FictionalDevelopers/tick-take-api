FROM node:erbium-alpine

WORKDIR /var/www/tick-take-api

COPY ./package.json ./
COPY ./yarn.lock ./

COPY ./src/server/package.json ./src/server/
COPY ./src/components/package.json ./src/components/
COPY ./src/middlewares/package.json ./src/middlewares/
COPY ./src/config/package.json ./src/config/
COPY ./src/utils/package.json ./src/utils/

RUN yarn --frozen-lockfile

COPY ./ ./

RUN yarn build

ENTRYPOINT [ "node", "dist/bundle.js" ]
