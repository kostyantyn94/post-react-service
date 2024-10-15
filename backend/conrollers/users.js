const User = require("../models/User");
const { bcryptHash, bcyptCompare } = require("../helper/bcrypt");
const {
  FieldRequiredError,
  AlreadyTakenError,
  NotFoundError,
  ValidationError,
} = require("../helper/customErrors");
const { jwtSign } = require("../helper/jwt");

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

    if (userExists) throw new AlreadyTakenError("Email", "try loggin in");

    const newUser = await User.create({
      email,
      username,
      bio,
      image,
      password: await bcryptHash(password),
    });

    newUser.dataValues.token = await jwtSign(newUser);

    const { password: passwd, ...userWithoutPassword } = newUser.toJSON();

    res.status(201).json({ user: userWithoutPassword });

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

    const pwd = await bcyptCompare(user.password, existentUser.password);

    if (!pwd) throw new ValidationError("Wrong email/password combination");

    existentUser.dataValues.token = await jwtSign(user);

    const { password, ...existentUserWithoutPassword } = existentUser.toJSON();

    res.json({ user: existentUserWithoutPassword });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signUp, signIn };
