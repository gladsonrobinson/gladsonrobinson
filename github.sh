#! /usr/bin/bash
cd /var/www/app/
git pull origin main --ff-only
npm run build
pm2 restart deepsky
