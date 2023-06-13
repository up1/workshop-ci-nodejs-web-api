# Workshop :: REST APIs with NodeJS
* Develop REST APIs
    * [Express framework](https://expressjs.com/)
    * [Express prometheus bundle](https://www.npmjs.com/package/express-prom-bundle)


## Step 1 :: Build
```
$npm install
$npm start
```
Call APIs
* Hello API => http://localhost:3000/
* Application Metric => http://localhost:3000/metrics

## Step 2 :: Testing in NodeJS
* [Jest](https://jestjs.io/)
* [SuperTest](https://www.npmjs.com/package/supertest)
```
$npm test
```

## Step 3 :: API Testing with Postman and Newman
* [Postman](https://www.postman.com/)
* [Newman](https://www.npmjs.com/package/newman)
```
$cd api-test
$newman run group01.postman_collection.json -r cli,junit
```

## Step 4 :: Static Code Analysis with [SonarQube](https://docs.sonarqube.org/latest/)

### 4.1 Config in file `sonar-project.properties`
```
sonar.projectKey=node-example
sonar.projectName=node-example
sonar.projectVersion=1.0

sonar.sources=src
sonar.tests=__tests__
sonar.sourceEncoding=UTF-8
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.testExecutionReportPaths=coverage/test-reporter.xml
```
### 4.2 Download and Install [SonarScanner](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/)

Edit file <install_directory_sonarscanner>/conf/sonar-scanner.properties
```
sonar.host.url=http://139.59.246.175:9000
sonar.login=admin
sonar.password=xitgmLwmp
```

### 4.3 Start process to analyze code
```
$sonar-scanner
```

## 5. Deploy with [PM2](https://pm2.keymetrics.io/)

Install
```
$npm install -g pm2@latest 
```

Start service
```
$pm2 start src/index.js --name api
$pm2 status
```

Manage process
```
$pm2 restart api
$pm2 reload api
$pm2 stop api
$pm2 delete api
```

Start with Cluster mode
```
$pm2 start app.js -i max --name api
```
or
```
$pm2 start src/index.js -i 2 --name api
```






