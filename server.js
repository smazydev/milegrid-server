const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");
const logger = require("logger").createLogger("development.log");

const port = process.env.PORT || 4000;

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  socket.on("cell-selected", (data) => {
    // console.log(data);
    socket.broadcast.emit("cell-selected", data);
  });

  socket.on("cells-selected", (data) => {
    // console.log(data);
    socket.broadcast.emit("cells-selected", data);
  });

  socket.on("cell-edited", (data) => {
    // console.log(data);
    socket.broadcast.emit("cell-edited", data);
  });

  socket.on("cell-style", (data) => {
    socket.broadcast.emit("cell-style", data);
  });

  socket.on("add-sheet", (data) => {
    socket.broadcast.emit("add-sheet", data);
  });

  socket.on("change", (data) => {
    socket.broadcast.emit("change", data);
  });

  /*   socket.on("update-cell-data", (data) => {
    console.log(data);
    socket.broadcast.emit("update-cell-data", data);
  }); */

  /*   socket.on("cell-styles", (data) => {
    console.log(data);
    socket.broadcast.emit("cell-styles", data);
  }); */

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
