FROM node:22-alpine3.21
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]