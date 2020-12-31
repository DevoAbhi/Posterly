const http = require('http');

const server = http.createServer((req, res) => {
  res.end("This is the response!")
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening!")
})
