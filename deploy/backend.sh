#!/bin/sh

ssh root@157.230.41.136 <<EOF
  cd ~/workshop-ci-nodejs-web-api/backend
  git pull
  npm install
  pm2 restart all
  exit
EOF