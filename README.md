# Workshop CI/CD :: Hello World 3
* [Frontend => React](https://github.com/up1/workshop-ci-nodejs-web-api/tree/main/frontend)
* [Backend  => NodeJS](https://github.com/up1/workshop-ci-nodejs-web-api/tree/main/backend)
* Database =>
  * MySQL
  * PHPMyAdmin
* [CI/CD with Jenkins](https://github.com/up1/workshop-ci-cd-with-jenkins/tree/main/workshop/install)
* [Generate Documentation from Code](https://github.com/up1/workshop-ci-nodejs-web-api/tree/main/document)

## Working with Docker and Docker compose

### Build images
```
$docker compose build backend
$docker compose build frontend
```

### Create containers

Database
```
$docker compose up -d mysql
$docker compose up -d phpmyadmin

$docker compose ps
```

Backend with NodeJS
```
$docker compose build backend
$docker compose up -d backend

$docker compose ps
```
URL to test
* http://localhost:3000
* http://localhost:3000/hello
* http://localhost:3000/db

Frontend
```
$docker compose build frontend
$docker compose up -d frontend

$docker compose ps
```

URL to test
* http://localhost:8080
* http://localhost:8080/api
* http://localhost:8080/api/hello
* http://localhost:8080/api/db

Logs
```
$docker compose logs --follow
```

Stop and remove all containers
```
$docker compose down
```

Start in one-line
```
$docker compose up -d
```

## API testing with postman + newman
```
$docker compose up postman --remove-orphans
```

### Reference Websites
* [Workshop CI/CD with Jenkins](https://github.com/up1/workshop-ci-cd-with-jenkins)
* [VS Code :: Generate class diagram from TypeScript]([classdiagram-t](https://marketplace.visualstudio.com/items?itemName=AlexShen.classdiagram-ts&ssr=false#overview)s)
