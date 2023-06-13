# Workshop :: Frontend with [ReactJS](https://react.dev/)
* Create project with [Vite](https://vitejs.dev/)

## Step 1 :: Build and Lint
```
$npm install

// Lint
$npm run lint

// Run in dev mode
$npm run dev
```

## Step 2 :: Build to deploy
```
$npm run build
```

## Step 3 :: Deploy to web server
```
$scp -r ./dist/* root@157.230.248.254:/var/www/html/
```