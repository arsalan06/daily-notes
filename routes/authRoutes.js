const authControler = require("../controlers/authControler");
const express = require("express");
const authRouter = express.Router();
const {signup, login}=authControler
authRouter.post("/signup",signup);
authRouter.post("/login",login);
module.exports = authRouter