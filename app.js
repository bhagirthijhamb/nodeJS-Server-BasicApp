const http = require("http");
const fs = require("fs");
const routes = require("./routes");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My First Page</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk); // <Buffer 6d 65 73 73 61 67 65 3d 68 61 72 65>
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody); // message=hare
//       const message = parsedBody.split("=")[1];
//       fs.writeFile("message.txt", message, (err) => {
//         // Moved this inside this callback
//         // as we want to run this code when the text is written to the file
//         res.statusCode = 302;
//         // Redirect the user from '/message' to '/'
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//       // fs.writeFileSync("message.txt", message);
//     });
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js server</h1></body>");
//   res.write("</html>");
//   return res.end();
// });
//----------------------------------
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>My First Page</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/message" && method === "POST") {
//     fs.writeFileSync("message.txt", "DUMMY");
//     res.statusCode = 302;
//     // Redirect the user from '/message' to '/'
//     res.setHeader("Location", "/");
//     return res.end();
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js server</h1></body>");
//   res.write("</html>");
//   return res.end();
// });

//----------------------------------

// const server = http.createServer((req, res) => {
//   console.log(req);
//   console.log(req.url, req.method, req.headers);
//   // process.exit();
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js server</h1></body>");
//   res.write("</html>");
//   return res.end();
// });

const server = http.createServer(routes);
server.listen(3000);

server.on("connection", (socket) => {
  console.log("New connection!");
});
