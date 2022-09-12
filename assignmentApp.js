// Assignment
// 1. Spin up a NodeJS-driven server (on port 3000)
// 2. Handle two routes: '/' and '/users'
// - Return some greeting text on '/'
// - Return a list of dummy users (eg. <ul><li>User 1</li></ul>)
// 3. Add a form with a 'username' <input> to the '/' page and submit a POST request to '/create-user' upon a button click
// 4. Add the '/create-user' route and parse the incoming data (i.e. the username) and simply log it to the console.

const http = require("http");
const routes = require("./assignmentRoutes");

const server = http.createServer(routes);

server.listen(3000);
server.on("connection", () => console.log("New connection ..."));
