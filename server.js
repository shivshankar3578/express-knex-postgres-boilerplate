const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/users.js");

// Middleware
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Routers
server.use("/api/users", usersRouter);

// error handler
server.use(function (err, req, res, next) {
  return res.status(500).json({ message: err.message })

});

module.exports = server;
