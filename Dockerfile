FROM node:20-alpine AS builder
WORKDIR /app

# Создать non-root пользователя
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Обновить пакеты и установить curl для health check
RUN apk update && apk add --no-cache curl

# Копируем файлы зависимостей для кеширования
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

# Копируем исходный код
COPY --chown=nextjs:nodejs . .

# Собираем проект
RUN yarn build

# Production stage
FROM nginx:alpine

# Обновить пакеты и установить curl для health check
RUN apk update && apk add --no-cache curl && rm -rf /var/cache/apk/*

# Создать non-root пользователя для nginx
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Копируем собранное приложение
COPY --from=builder --chown=nextjs:nodejs /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Создать директории и установить права
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run /tmp
RUN chown -R nextjs:nodejs /var/cache/nginx /var/log/nginx /var/run /usr/share/nginx/html /tmp

# Настроить nginx для работы с non-root пользователем
RUN sed -i 's/user nginx;/user nextjs;/' /etc/nginx/nginx.conf
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Переключиться на non-root пользователя
USER nextjs

EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1