const jwt = require("jsonwebtoken");

exports.generateToken = (userId) => {
      return jwt.sign(
            { userId, lastActivity: Date.now() },
            process.env.JWT_SECRET
      );
};