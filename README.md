# tribby.com

Website for tribby.com build using Vue, Sass, Pug, and Susy on the front-end, and Nginx, Node, Express, and PM2 on the back-end.

## Install

First install npm through apt (or whatever), node through nvm, and pm2 through npm:

``` bash

# install build tools and npm
sudo apt-get update
sudo apt-get install build-essential libssl-dev npm

# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

# prevent need for reboot to use nvm command
source ~/.profile

# install node 6.9.2, and use it by default
nvm install 6.9.2
nvm use 6.9.2

#install pm2
npm i pm2 -g 
```

## Build or develop Vue app:

``` bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode, also at 8080
npm start
```

## Serve
To serve your built assets on 8080 for a reverse proxy

``` bash
./serve.sh
```

## Nginx config

Replace `*.*.*.*` with actual IP.

```
server {
    listen         80;
    server_name    tribby.com;
    return         301 https://$server_name$request_uri;
}

server {
    listen 443;

    ssl on;
    ssl_certificate /etc/nginx/keys/tribby.com.pem;
    ssl_certificate_key /etc/nginx/keys/tribby.com.key;

    server_name tribby.com;
    
    location / {
        proxy_pass http://*.*.*.*:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
