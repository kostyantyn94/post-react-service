const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../conrollers/users");

// Register
router.post("/", signUp);

// Login
router.post("/login", signIn);

module.exports = router;
