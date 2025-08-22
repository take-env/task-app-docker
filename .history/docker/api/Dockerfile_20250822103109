FROM php:8.2-fpm-alpine


RUN apk add --no-cache \
    bash \
    git \
    zip \
    unzip \
    curl \
    oniguruma-dev \
    libzip-dev \
    mysql-client \
    && docker-php-ext-install pdo_mysql mbstring zip


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/api