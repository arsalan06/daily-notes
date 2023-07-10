const { Notes } = require("../models");
const appError = require("../utils/appError");
exports.addNotes = async (req, res) => {
  try {
    const { heading, subHeading, userId } = req.body;
    if (!userId) {
      return next(
        new appError("UserId is required", 401)
      );
    }
    const newNotes = await Notes.create({
      userId,
      heading,
      subHeading
    })
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
}