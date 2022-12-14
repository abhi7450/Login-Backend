const express = require("express");
const router = express.Router();

const { signIn, signOut } = require("./auth.controller");

router.route("/signin").post(signIn);
router.route("/signout").get(signOut);

module.exports = router;
