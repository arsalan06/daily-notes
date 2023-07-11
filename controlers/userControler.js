const { User } = require("../models");
const appError = require("../utils/appError");


exports.findUser = async (req, res, next) => {
    try {
        const { userId } = req.query;
        const newUser = await User.findOne({ where: { id: userId }, include: "Notes" });
        if (!newUser) {
            return next(
                new appError("This user does not exist", 401)
            );
        }

        newUser.password = undefined
        res.status(201).json({
            status: "success",
            data: {
                user: newUser,
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