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
$newman run group01.postman_collection.json
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





