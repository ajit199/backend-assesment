require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

// Middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const authRoutes = require("./routes/user.route");
const dataRoutes = require("./routes/data.route");
// const secureRoutes = require("./routes/secureRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
// app.use("/api/secure", secureRoutes);

module.exports = app;
