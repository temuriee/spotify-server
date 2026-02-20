const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/User.js");

//@desc - Register a new User
//@route - /api/users/register
//@method - POST
//@access - Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "User registration endpoint" });
});

module.exports = { registerUser };
