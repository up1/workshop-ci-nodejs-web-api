# Workshop :: Deploy with K8s
* [K8s](https://kubernetes.io/)


## Create manifest files for K8s
* [Kompose](https://kompose.io/)

```
$kompose convert -f docker-compose.yml
```

## Deploy MySQL
```
$kubectl apply -f mysql-deployment.yaml

$kubectl get all
$kubectl get deployment
$kubectl get rs
$kubectl get pod
```


## Deploy Backend
```
$kubectl apply -f backend-deployment.yaml
$kubectl apply -f backend-service.yaml

$kubectl get all
$kubectl get deployment
$kubectl get rs
$kubectl get pod
$kubectl get service
```

## Delete all
```
$kubectl delete *.yaml
```