# stage 1 building the code
FROM node:latest as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

ARG APP_VERSION

RUN yarn install

COPY . .

RUN yarn build

RUN yarn install --production


# stage 2
FROM node:alpine as production

LABEL maintainer="Nghiep <me@nghiepit.dev>"

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package.json yarn.lock ./

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 4000

ENTRYPOINT yarn start
