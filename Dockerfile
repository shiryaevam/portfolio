FROM node:20-alpine AS builder
WORKDIR /app


# Копируем файлы зависимостей для кеширования
COPY package*.json ./
COPY yarn.lock ./

# Устанавливаем зависимости через Yarn
RUN yarn install --frozen-lockfile

# Копируем исходный код
COPY . .

# Собираем проект через Yarn
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80