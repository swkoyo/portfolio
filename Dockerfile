FROM node:17.2.0-alpine3.12
RUN apk add --no-cache bash curl
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN mkdir -p /app
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . /app
RUN pnpm build

EXPOSE 3000
CMD [ "pnpm", "start" ]