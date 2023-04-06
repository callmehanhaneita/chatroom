# Chatroom Application

This is a monorepo built with turborepo, it contains chatroom-frontend built with React and chatroom-backend built with nest.js


### Develop

#### Setup MongoDB

run below command at root folder
```
podman-compose up -d --remove-orphan
```

#### Run with development mode
install dependencies at first time
```
npm install
```
and run the application with
```
npm run dev
```
frontend should be http://localhost:5173 and 
backend should be http://localhost:3001

#### What's more
Please use url query to switch user **ONLY FOR DEMO PURPOSE!!!!**
try with
```
http://localhost:5173/?user=Albert
http://localhost:5173/?user=Darlene
http://localhost:5173/?user=Courtney
http://localhost:5173/?user=Jenny
```
