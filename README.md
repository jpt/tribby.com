# tribby.com

Website for tribby.com build using:

Node, Vue (server-side rendering), vue-router, Express, Sass, Pug, Susy.

## Install

First install npm through apt (or whatever), node through nvm, and pm2 through npm:

```
sudo apt-get update
sudo apt-get install build-essential libssl-dev`npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.profile
nvm install 6.9.2
nvm use 6.9.2
npm i pm2 -g 
```

## Build or Develop

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
To serve as a reverse proxy:

```
./serve.sh
```
