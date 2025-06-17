#!/bin/bash

renew_ssl.sh - renew Let's Encrypt cert and restart nginx container

Renew certificate using certbot Docker image

docker run --rm 
-v /etc/letsencrypt:/etc/letsencrypt 
-v $(pwd)/certbot/webroot:/var/www/certbot 
certbot/certbot renew --webroot -w /var/www/certbot --quiet

Restart the nginx container serving the LLaMA app

docker restart llama-nginx

