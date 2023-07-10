const notesControler = require("../controlers/notesControler");
const { protect } = require("../midlewares/protection")
const express = require("express");
const notesRouter = express.Router();
const { addNotes, singleNotes, updateNotes, deleteNotes } = notesControler
notesRouter.route("/addNotes").post(protect, addNotes);
notesRouter.route("/singleNotes").get(protect, singleNotes);
notesRouter.route("/updateNotes").patch(protect, updateNotes);
notesRouter.route("/deleteNotes").delete(protect, deleteNotes);
module.exports = notesRouter