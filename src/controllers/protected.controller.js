const asyncHandler = require("../utils/asyncHandler.js");

const protectedRoute = asyncHandler(async (req, res) => {
  return res.json({
    message: "user is authenticated.",
  });
});

module.exports = protectedRoute;
