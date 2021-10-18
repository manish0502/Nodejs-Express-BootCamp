const User = require("../models/User");
const asyncWrapper = require("../middleware/async");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = asyncWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError(
      "Something is Missing either Name, Email and password"
    );
  }

  let checkUser = await User.findOne({ email });
  if (checkUser) {
    throw new UnauthenticatedError(`User is Already Exist with Email ${email}`);
  }

  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    msg: "User has been successfully created",
    status: StatusCodes.CREATED,
    user: { name: user.name },
    token,
  });
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide valid email and pasword");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError(`User does not exist with Email ${email}`);
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  // res.status(StatusCodes.OK).json({ user: { name: user.name }, token })

  res.status(StatusCodes.OK).json({
    msg: "LogIn successfully",
    status: StatusCodes.OK,
    user:  { name: user.name },
    token,
  });
});

module.exports = {
  register,
  login,
};
