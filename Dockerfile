# Билд-стадия
FROM node:20-alpine AS builder
WORKDIR /app

# Устанавливаем Yarn (кешируется отдельным слоем)
RUN npm install -g yarn

# Копируем файлы зависимостей для кеширования
COPY package*.json ./
COPY yarn.lock ./

# Устанавливаем зависимости (кешируется отдельно)
RUN yarn install --frozen-lockfile

# Копируем исходный код
COPY . .

# Собираем проект
RUN yarn build

# Продакшен-стадия
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80