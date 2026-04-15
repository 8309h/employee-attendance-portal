const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const ctrl = require("../controllers/leave.controller");

router.post("/apply", auth, ctrl.applyLeave);
router.get("/", auth, ctrl.getLeaves);

module.exports = router;