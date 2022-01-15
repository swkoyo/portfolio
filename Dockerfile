FROM node:17.2.0-alpine3.12
RUN apk add --no-cache --virtual bash nano

WORKDIR /usr/src/app

ENTRYPOINT ["scripts/entrypoint.sh"]
