const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
      res.status(200).json({
            status: "success",
            message: "Employee Attendance API is running 🚀",
      });
});
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/attendance", require("./routes/attendance.routes"));
app.use("/api/leaves", require("./routes/leave.routes"));

module.exports = app;