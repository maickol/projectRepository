# Project Repository
Web app to post project oportunities

Project created using VueJS, Vuex and Vue-CLI

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4000
npm run dev

# running the server
npm run server

# build for production with minification
npm run build
```

## Credentials
Users and credentials are hardcoded on `server/data.js`.

## Firebase Configuration
* Configuration file `avantica-project-repository.json` (autogenerated by Firebase console).
* Initialization: `server.js`

## TODO
* Delete Project (FE and BE)
* Refact get project by id, to use fbId to avoid searching through all projects (FE and BE)
* Colapse hamburger menu on mobile views when option is selected (FE)
