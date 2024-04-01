const app = require("./app");
const connectDB = require("./db/index");
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGINT", () => {
      console.log("Shutting down server");
      server.close(() => {
        console.log("Server is shut down");
        process.exit(0);
      });
    });

    process
      .on("unhandledRejection", (reason, promise) => {
        console.error("Unhandled Rejection at:", promise, "reason:", reason);
        process.exit(1);
      })
      .on("uncaughtException", (err) => {
        console.error(err, "Uncaught Exception thrown, exiting...");
        process.exit(1);
      });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
