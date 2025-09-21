FROM node:22-alpine AS builder
WORKDIR /app

# Копируем файлы зависимостей для кеширования
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

# Копируем исходный код
COPY . .

# Собираем проект
RUN yarn build

# Production stage
FROM nginx:alpine

# (конфиг Nginx монтируется через volume :ro из хоста)

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

# Health check (корневой маршрут приложения)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/ > /dev/null 2>&1 || exit 1