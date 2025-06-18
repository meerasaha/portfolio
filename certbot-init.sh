#!/bin/bash

DOMAINS="rishavsaha.duckdns.org www.rishavsaha.duckdns.org"
EMAIL="rishavsahaaa@gmail.com"

# Build the domain arguments for Certbot
DOMAIN_ARGS=""
for domain in $DOMAINS; do
  DOMAIN_ARGS="${DOMAIN_ARGS} -d ${domain}"
done

echo "Attempting to obtain certificates for: $DOMAINS"

# Run Certbot to get certificates
docker compose run --rm certbot certonly --webroot -w /var/www/certbot \
  --email "$EMAIL" --agree-tos --no-eff-email \
  $DOMAIN_ARGS

if [ $? -eq 0 ]; then
    echo "Certificates obtained successfully. Starting Nginx and app instances."
    # Start Nginx and instances of your app (adjust scale as needed as 1,2...N)
    docker compose up -d nginx my_app --scale my_app=1
else
    echo "Certbot failed. Check logs."
    exit 1
fi