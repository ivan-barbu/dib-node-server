const http = require("http");

const host = 'localhost';
const port = 8000;

const myObject = {
  name: "ivan",
  age: 21,
}

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(myObject));
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})

