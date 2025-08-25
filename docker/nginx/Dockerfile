# docker/nginx/Dockerfile
FROM nginx:1.23.4

COPY default.conf /etc/nginx/conf.d/default.conf

RUN nginx -t || (cat /etc/nginx/nginx.conf; exit 1)
