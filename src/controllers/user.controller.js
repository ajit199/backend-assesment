const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/ApiError.js");
const User = require("../models/user.model.js");

const getAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    // get access token
    const accessToken = user.generateAccessToken();
    return { accessToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check required fields
  if ([name, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    email,
  });

  // check if user already exists.
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");

  // check if user has created.
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json({ user: createdUser });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check required field.
  if (!email || !password) {
    throw new ApiError(400, "email or password is required.");
  }

  const user = await User.findOne({
    email,
  });

  // check if user exists.
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // check if password is correct.
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken } = await getAccessToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password");

  const options = {
    httpOnly: true,
    secure: true,
  };

  // set access token in the cookie.
  return res.status(200).cookie("accessToken", accessToken, options).json({
    user: loggedInUser,
    accessToken,
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  // unset access token in the cookie.
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .json({ message: "User logged Out" });
});

module.exports = { registerUser, loginUser, logoutUser };
