#Contact App with REST API

https://github.com/typicode/json-server#getting-started

npm install -g json-server

json-server --watch db.json

http.js library

REST API
GET, POST, PUT, DELETE

Request- special format
GET domain(localhost:3000)/contacts
GET /contacts/:id(special contact)
POST /contacts
PUT /contacts/:id(special contact)
DELETE /contacts/:id(special contact)

add script on package.json "json:server": "json-server --watch api/db.json"

run json server and project live in different port

instantiate http and export http
import to index.js from http.js

getContacts function executes when DOM loaded
UI section executes
