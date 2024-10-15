const { NotFoundError } = require("../helper/customErrors");
const { jwtVerify } = require("../helper/jwt");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    const { headers } = req;

    if (!headers.authorization) return next();

    const token = headers.authorization.split(" ")[1];
    if (!token) throw new SyntaxError("Token missing or malformed");

    const userVerified = await jwtVerify(token);
    if (!userVerified) throw new Error("Invalid token");

    req.loggedUser = await User.findOne({
      attributes: { exclude: ["email"] },
      where: { email: userVerified.email },
    });

    if (!req.loggedUser) next(new NotFoundError("User"));

    headers.email = userVerified.email;
    console.log(headers);
    req.loggedUser.dataValues.token = token;

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = verifyToken;
