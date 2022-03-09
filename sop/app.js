const http = require("http");
const fs = require("fs");

// Serve Site 1
const siteOne = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("site1.html").pipe(response);
});

siteOne.listen(3001);
console.log("Serving Site One at port 3001");

// Serve Site 2
const siteTwo = http.createServer((request, response) => {
  if (request.url === "/same-origin") {
    response.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("site1.html").pipe(response);
  } else {
    response.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("site2.html").pipe(response);
  }
});

siteTwo.listen(3002);
console.log("Serving Site Two at port 3002");
