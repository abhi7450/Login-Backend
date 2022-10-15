const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require("../../../config/config");

const signIn = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isValidPassword = bcrypt.compareSync(req.body.password, user.hashed_password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Not a valid Password",
      });
    }
    const token = jwt.sign({}, conf);
    return res.status(200).send({
      id: user._id,
      name: user.name,
      email: user.email,
      created: user.created,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
const signOut = (req, res, next) => {};

const requireSigin = () => {};
const hasAuthorisation = () => {};
module.exports = {
  signIn,
  signOut,
};
