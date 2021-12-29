FROM node:17.2.0-alpine3.12
RUN apk add --no-cache bash curl nano
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

ENTRYPOINT ["scripts/entrypoint.sh"]
