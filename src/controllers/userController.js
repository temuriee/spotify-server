const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const registerUser = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "User Registration EndPoint" });
});

module.exports = { registerUser };
