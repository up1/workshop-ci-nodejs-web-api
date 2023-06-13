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

