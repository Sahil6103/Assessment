// install dependencies
// install express socket.io --save
const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("send name", (username) => {
    io.emit("send name", username);
  });

  socket.on("send message", (chat) => {
    io.emit("send message", chat);
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
