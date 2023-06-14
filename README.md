# Workshop CI/CD :: Hello World
* Frontend => React
* Backend  => NodeJS
* Database => MySQL

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
