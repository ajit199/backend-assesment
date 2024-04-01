require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
const { specs, swaggerUi } = require("./middlewares/swagger.middleware");
const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
const authRoutes = require("./routes/user.route");
const dataRoutes = require("./routes/data.route");
const secureRoutes = require("./routes/protected.route");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/data", dataRoutes);
app.use("/api/v1/secure", secureRoutes);

module.exports = app;
