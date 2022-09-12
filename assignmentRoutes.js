const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment First page</title></head>");
    res.write(
      "<body><h1>Welcome to my page</h1><h2>My first assignment</h2><form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment First page</title></head>");
    res.write(
      "<body><h1>My first assignment</h1><ul><li>User 1</li><li>User 2</li></ul></body>"
    );
    res.write("</html>");
  }

  if (url === "/create-user") {
    // An array of buffered chunck
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      // Create a new buffer of the buffered chunck
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log(user);
      // redirect
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
};

module.exports = requestHandler;
