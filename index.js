const express= require("express")
require("dotenv").config();
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const authRoute = require("./routes/authRoutes");
const notesRoute = require("./routes/notesRoutes");
const userRoute = require("./routes/userRoutes");
app.use("/api/v1", authRoute);
app.use("/api/v1", notesRoute);
app.use("/api/v1", userRoute);


app.use((err, req, res, next)=>{
  err.statusCode=err.statusCode || 500
  err.status=err.status || "error"
  res.status(err.statusCode).json({
    status: err.status,
    message:err.message
  })
})

module.exports = app;