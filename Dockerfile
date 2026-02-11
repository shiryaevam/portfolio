# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS builder
WORKDIR /app

# Устанавливаем зависимости с кэшированием
COPY package*.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g
RUN --mount=type=cache,id=yarn-cache,target=/root/.cache/yarn \
    yarn install --frozen-lockfile --production=false

# Копируем исходники и собираем
COPY . .
RUN yarn build

# Runtime слой
FROM caddy:2-alpine

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/caddy


EXPOSE 80 443