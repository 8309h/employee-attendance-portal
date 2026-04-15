const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const ctrl = require("../controllers/attendance.controller");

router.post("/checkin", auth, ctrl.checkIn);
router.post("/checkout", auth, ctrl.checkOut);
router.get("/today-status", auth, ctrl.getTodayStatus);
router.get("/timesheet", auth, ctrl.getTimesheet);

module.exports = router;