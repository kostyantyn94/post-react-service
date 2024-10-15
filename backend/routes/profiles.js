const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authentication");
const { getProfile } = require("../conrollers/profiles");

//? Profile
router.get("/:username", verifyToken, getProfile);

module.exports = router;
