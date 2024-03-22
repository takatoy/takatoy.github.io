FROM node:21-slim

RUN npm install -g bun

WORKDIR /app

COPY ./package.json ./bun.lockb /app/
RUN bun install

COPY . /app/

CMD bun run build
