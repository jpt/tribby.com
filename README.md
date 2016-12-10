# tribby.com

Website for tribby.com build using Vue 2.0 + vue-router, with server-side rendering.

## Build Setup

**Requires Node.js 6+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## Install

First install npm through apt, node through nvm, and pm2 through npm:

```
sudo apt-get update
sudo apt-get install build-essential libssl-dev`npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.profile
nvm install 6.9.2
nvm use 6.9.2
npm i pm2 -g 
```

## Serve
To serve as a reverse proxy on port 8080:

```
./serve.sh
```
