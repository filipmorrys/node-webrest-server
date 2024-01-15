import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.url);

  // if (req.url === '/') {
  //     const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(htmlFile);
  // } else {
  //     res.writeHead(404, { 'Content-Type': 'text/html' });
  //     res.end();
  // }

  const resource =
    req.url === "/" ? "./public/index.html" : `./public${req.url}`;

  let contentType = "text/html";
  if (resource.endsWith(".css")) {
    contentType = "text/css";
  } else if (resource.endsWith(".js")) {
    contentType = "application/javascript";
  }

  if (fs.existsSync(resource)) {
    const resourceFile = fs.readFileSync(resource, "utf-8");
    res.writeHead(200, { "Content-Type": contentType });
    res.end(resourceFile);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
