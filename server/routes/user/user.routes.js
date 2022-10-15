/**
 * /api/users for the following:
    Listing users with GET
    Creating a new user with POST
* /api/users/:userId for the following:
    Fetching a user with GET
    Updating a user with PUT
    Deleting a user with DELETE
 * 
 */
const express = require("express");
const { getListOfUser, createUser, userById, getUser, updateUser, deleteUser } = require("./user.controller");
const router = express.Router();

router.route("/api/users").get(getListOfUser).post(createUser);

// router.route("/api/users/:userId").get(userCtrl.getUser).put(userCtrl.updateUser).delete(userCtrl.deleteUser);

router.param("userId", userById);

module.exports = router;
