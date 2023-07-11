const { Notes } = require("../models");
const appError = require("../utils/appError");
exports.addNotes = async (req, res, next) => {
  try {
    const { heading, subHeading, userId } = req.body;
    if (!userId) {
      return next(new appError("UserId is required", 401));
    }
    const newNotes = await Notes.create({
      userId,
      heading,
      subHeading,
    });
    res.status(201).json({
      status: "success",
      data: {
        newNotes: newNotes,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.singleNotes = async (req, res, next) => {
  try {
    const { notesId } = req.query;
    if (!notesId) {
      return next(new appError("NotesId is required", 401));
    }
    const notes = await Notes.findOne({ where: { id: notesId } });
    res.status(201).json({
      status: "success",
      data: {
        notes,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.updateNotes = async (req, res, next) => {
  try {
    const { notesId } = req.query;
    if (!notesId) {
      return next(new appError("NotesId is required", 401));
    }
    const notes = await Notes.findByPk(notesId);
    if (!notes) {
      return next(new appError("Notes does not exist", 401));
    }
    req.body.status = "completed";
    // other way
    // await Users.update({
    //     name: name,
    //     email: email,
    //     password: password,
    //     age: age,
    //     state: state,
    //     city: city,
    //   },
    //   { where: { id: user.id } }
    // );
    const updatedNotes = await notes.update(req.body);

    res.status(201).json({
      status: "success",
      data: {
        updatedNotes,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.deleteNotes = async (req, res, next) => {
  try {
    const { notesId } = req.query;
    if (!notesId) {
      return next(new appError("NotesId is required", 401));
    }
    const notes = await Notes.findByPk(notesId);
    if (!notes) {
      return next(new appError("Notes does not exist", 401));
    }
    // other way
    // await Users.destroy({ where: { id: user.id } });
    const deletedNotes = await notes.destroy();

    res.status(201).json({
      status: "success",
      data: {
        deletedNotes,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};
