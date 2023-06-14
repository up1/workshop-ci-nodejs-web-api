# Workshop CI/CD :: Hello World
* [Frontend => React](https://github.com/up1/workshop-ci-nodejs-web-api/tree/main/frontend)
* [Backend  => NodeJS](https://github.com/up1/workshop-ci-nodejs-web-api/tree/main/backend)
* Database => MySQL
* [CI/CD with Jenkins](https://github.com/up1/workshop-ci-cd-with-jenkins/tree/main/workshop/install)

## Working with Docker

Build images
```
$docker compose build frontend
$docker compose build backend
```

Create containers
```
$docker compose up -d frontend
$docker compose up -d backend
$docker compose ps
```

Logs
```
$docker compose logs --follow
```

Stop and remove all containers
```
$docker compose down
```

### Reference Websites
* [Workshop CI/CD with Jenkins](https://github.com/up1/workshop-ci-cd-with-jenkins)
