const User = require("../models/User");
const {
  FieldRequiredError,
  AlreadyTakenError,
  NotFoundError,
} = require("../helper/customError");
// Register

const signUp = async (req, res, next) => {
  try {
    const { username, email, bio, image, password } = req.body.user;
    if (!username) throw new FieldRequiredError(`A username`);
    if (!email) throw new FieldRequiredError(`A email`);
    if (!password) throw new FieldRequiredError(`A password`);

    const userExists = await User.findOne({
      where: { email: req.body.user.email },
    });

    const newUser = await User.create({
      email,
      username,
      bio,
      image,
      password,
    });

    res.status(201).json({ user: newUser });

    if (userExists) throw new AlreadyTakenError("Email", "try loggin in");
  } catch (err) {
    console.log(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { user } = req.body;

    const existentUser = await User.findOne({ where: { email: user.email } });
    if (!existentUser) throw new NotFoundError("Email", "sign in first");

    res.json({ user: existentUser });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signUp, signIn };
