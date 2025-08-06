#!/bin/bash

echo "Building UXHQ frontend..."
npm run build

echo "Copying files to web directory..."
cp -r dist/* /var/www/uxhq/

echo "Setting proper permissions..."
chown -R nginx:nginx /var/www/uxhq
chmod -R 755 /var/www/uxhq

echo "Deployment complete!"
echo "Files deployed to: /var/www/uxhq"
