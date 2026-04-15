const sequelize = require("../config/db");

const User = require("./user.model");
const Attendance = require("./attendance.model");
const Leave = require("./leave.model");

User.hasMany(Attendance);
Attendance.belongsTo(User);

User.hasMany(Leave);
Leave.belongsTo(User);

module.exports = {
      sequelize,
      User,
      Attendance,
      Leave,
};