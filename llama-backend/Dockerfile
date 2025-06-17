version: '3.8'

services:
  backend:
    build: .
    container_name: llama-api
    ports:
      - "8000:8000"
    volumes:
      - ./models:/app/models

  nginx:
    image: nginx:latest
    container_name: llama-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
      - ./nginx/ssl:/etc/letsencrypt
      - /var/www/certbot:/var/www/certbot
    depends_on:
      - backend
