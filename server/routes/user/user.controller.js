const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
const { extend } = require("lodash");

const createUser = async (req, res) => {
  console.log(req.body);
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    hashed_password: bcrypt.hashSync(req.body.password, 8),
  });
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfull Signup",
    });
  } catch (err) {
    return res.status(400).json({
      message: "Something went wrong..",
    });
  }
};

const getListOfUser = async (req, res, next) => {
  try {
    const usersList = await User.find().select("name email updated created");
    return res.status(200).json(usersList);
  } catch (err) {
    return res.status(400).json({ message: "Something is Wrong" });
  }
};
const userById = (req, res, next, id) => {
  try {
    const user = User.findById(id);
    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Couldn't retrieve User",
    });
  }
};

const getUser = (req, res, next) => {
  req.profile.hashed_password = undefined;
  return res.status(200).json(req.profile);
};

const updateUser = async (req, res, next) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
};
const deleteUser = (req, res, next) => {
  try {
    let user = req.profile;
    let deletedUser = user.delete();
    deletedUser.hashed_password = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      message: "Error while deleting",
    });
  }
};

module.exports = {
  getListOfUser,
  createUser,
  userById,
  getUser,
  updateUser,
  deleteUser,
};
