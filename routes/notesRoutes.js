const notesControler = require("../controlers/notesControler");
const { protect } = require("../midlewares/protection")
const express = require("express");
const notesRouter = express.Router();
const { addNotes } = notesControler
notesRouter.route("/addNotes").post(protect, addNotes);
module.exports = notesRouter