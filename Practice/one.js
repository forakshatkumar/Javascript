import http from "http";

const server = http.createServer((req, res) => {
  res.end("Go Beyond,Plus ULtra!");
});

server.listen(4000, () => console.log("Server is running.."));
