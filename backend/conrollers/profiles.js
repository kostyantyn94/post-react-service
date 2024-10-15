const { UnauthorizedError, NotFoundError } = require("../helper/customErrors");
const { User } = require("../models");

//? Profile
const getProfile = async (req, res, next) => {
  try {
    const { loggedUser } = req;
    const { username } = req.params;

    const profile = await User.findOne({
      where: { username: username },
      attributes: { exclude: "email" },
    });
    if (!profile) throw new NotFoundError("User profile");

    res.json({ profile });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProfile };
