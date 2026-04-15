const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Leave = sequelize.define("Leave", {
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
      type: DataTypes.STRING,
      reason: DataTypes.TEXT,
      status: {
            type: DataTypes.ENUM("PENDING", "APPROVED", "REJECTED"),
            defaultValue: "PENDING",
      },
});

module.exports = Leave;