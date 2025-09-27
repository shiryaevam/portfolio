FROM node:22-alpine AS builder
WORKDIR /app

# Копируем файлы зависимостей для кеширования
COPY package*.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g \
  && for i in 1 2 3; do yarn install --frozen-lockfile --production=false && break || (echo "yarn install failed, retry $i" && sleep 5); done

# Копируем исходный код
COPY . .

# Собираем проект
RUN yarn build

# Production stage
FROM caddy:2-alpine

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/caddy

# Копируем конфигурацию Caddy в JSON
COPY caddy.json /etc/caddy/caddy.json

EXPOSE 80 443