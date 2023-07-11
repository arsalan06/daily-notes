const userControler = require("../controlers/userControler");
const { protect } = require("../midlewares/protection")
const express = require("express");
const userRoutes = express.Router();
const {findUser } = userControler
userRoutes.route("/findUser").get(findUser);
module.exports = userRoutes