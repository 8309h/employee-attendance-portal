const bcrypt = require("bcrypt");
const { User } = require("../models");
const { generateToken } = require("../utils/token.util");

// ✅ SIGNUP
exports.signup = async (req, res) => {
      try {
            const { username, password } = req.body;

            const existingUser = await User.findOne({ where: { username } });
            if (existingUser) {
                  return res.status(400).json({ message: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                  username,
                  password: hashedPassword,
            });

            res.status(201).json({
                  message: "User created successfully ✅",
                  user: {
                        id: user.id,
                        username: user.username,
                  },
            });
      } catch (error) {
            res.status(500).json({ message: "Signup failed ❌", error });
      }
};

exports.login = async (req, res) => {
      try {
            const { username, password } = req.body;

            const user = await User.findOne({ where: { username } });

            if (!user)
                  return res.status(400).json({ message: "User not found" });

            const valid = await bcrypt.compare(password, user.password);

            if (!valid)
                  return res.status(400).json({ message: "Invalid password" });

            const token = generateToken(user.id);

            res.json({ token });
      } catch (error) {
            res.status(500).json({ message: "Login failed ❌", error });
      }
};