# Workshop :: Deploy with Swarm
* [Swarm mode](https://docs.docker.com/engine/swarm/)

## Initial Docker Swarm mode
```
$docker swarm init
```

## Check nodes in cluster
```
$docker node ls
```

## Deploy with docker-compose file
```
$docker stack deploy --compose-file docker-compose.yml demostack
$docker stack services demostack
```

## List of services
```
$docker service ls
```

Testing 
* http://localhost:3000
* http://localhost:3000/db

## Scaling services
```
$docker service scale demostack_backend=5
$docker service ls
```

## Delete stack
```
$docker stack rm demostack
```

## Leave node from Swarm
```
$docker swarm leave --force
```