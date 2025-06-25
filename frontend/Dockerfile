FROM node:18 AS step1
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=step1 /app/dist/ /usr/share/nginx/html
COPY ./nginx/reverse.conf /etc/nginx/nginx.conf