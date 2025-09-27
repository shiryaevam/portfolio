FROM caddy:2-alpine

# Скопируем статические файлы
COPY dist /usr/share/caddy

# Скопируем конфигурацию Caddy
COPY caddy.json /etc/caddy/caddy.json

EXPOSE 80 443