const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/ApiError.js");
const axios = require("axios");

const getData = asyncHandler(async (req, res) => {
  const { category = "", skip = undefined, limit = undefined } = req.query;

  if (skip && limit) {
    const intSkip = parseInt(skip);
    const intLimit = parseInt(limit);

    if (isNaN(intSkip) || isNaN(intLimit)) {
      throw new ApiError(401, "invalid query parameters.");
    }
  }

  const response = await axios.get(
    `https://api.publicapis.org/entries?category=${category}`
  );

  let publicData = response?.data;

  publicData.entries = publicData?.entries?.slice(+skip, +skip + +limit);
  publicData.count = +limit;

  return res.json({
    ...(publicData?.count
      ? { data: publicData }
      : { message: "data not found." }),
  });
});

module.exports = getData;
