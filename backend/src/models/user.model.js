const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
      username: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING },
      role: {
            type: DataTypes.ENUM("EMPLOYEE", "ADMIN", "MANAGER"),
            defaultValue: "EMPLOYEE",
      },
});

module.exports = User;