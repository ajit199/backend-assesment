const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/ApiError.js");
const axios = require("axios");

const getData = asyncHandler(async (req, res) => {
  // assign default values to query parameters.
  const { category = "", skip = undefined, limit = undefined } = req.query;

  // check variables and their types.
  if (skip && limit) {
    const intSkip = parseInt(skip);
    const intLimit = parseInt(limit);

    if (isNaN(intSkip) || isNaN(intLimit)) {
      throw new ApiError(401, "invalid query parameters.");
    }
  }

  // get data from public api's.
  const response = await axios.get(
    `https://api.publicapis.org/entries?category=${category}`
  );

  let publicData = response?.data;

  // check if data not empty.
  if (publicData?.count) {
    publicData.entries = publicData?.entries?.slice(+skip, +skip + +limit);
    publicData.count = +limit;

    return res.json({
      data: publicData,
    });
  } else {
    return res.json({
      message: "data not found.",
    });
  }
});

module.exports = getData;
