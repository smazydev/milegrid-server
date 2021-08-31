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
  socket.on("singular-cell-selection", (data) => {
    console.log(data);
    socket.broadcast.emit("singular-cell-selection", data);
  });

  socket.on("multiple-cell-selection", (data) => {
    console.log(data);
    socket.broadcast.emit("multiple-cell-selection", data);
  });

  socket.on("cell-edited", (data) => {
    console.log(data);
    socket.broadcast.emit("cell-edited", data);
  });

/*   socket.on("update-cell-data", (data) => {
      console.log(data);
      socket.broadcast.emit("update-cell", data);
  }); */

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
