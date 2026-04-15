const router = require("express").Router();
const { login, signup } = require("../controllers/auth.controller");

// ✅ ADD THIS
router.post("/signup", signup);

// existing
router.post("/login", login);

module.exports = router;