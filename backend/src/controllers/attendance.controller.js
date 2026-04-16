const { Attendance } = require("../models");
const dayjs = require("dayjs");

// ✅ CHECK-IN
exports.checkIn = async (req, res) => {
      try {
            const today = dayjs().format("YYYY-MM-DD");

            const nowIST = dayjs().add(5, "hour").add(30, "minute").toDate();

            const existing = await Attendance.findOne({
                  where: { UserId: req.user.userId, date: today },
            });

            if (existing) {
                  return res.status(400).json({ message: "Already checked in" });
            }

            await Attendance.create({
                  UserId: req.user.userId,
                  date: today,
                  check_in: nowIST,
            });

            res.json({ message: "Checked in successfully ✅" });
      } catch (err) {
            console.log("CheckIn Error:", err);
            res.status(500).json({ message: "Error in check-in ❌" });
      }
};



// CHECK-OUT
exports.checkOut = async (req, res) => {
      try {
            const today = dayjs().format("YYYY-MM-DD");

            const record = await Attendance.findOne({
                  where: { UserId: req.user.userId, date: today },
            });

            if (!record) {
                  return res.status(400).json({ message: "Check-in first ❌" });
            }

            if (record.check_out) {
                  return res.status(400).json({ message: "Already checked out ❌" });
            }

            const nowIST = dayjs().add(5, "hour").add(30, "minute").toDate();

            record.check_out = nowIST;
            await record.save();

            res.json({ message: "Checked out successfully ✅" });
      } catch (err) {
            console.log("CheckOut Error:", err);
            res.status(500).json({ message: "Error in check-out ❌" });
      }
};



// TODAY STATUS
exports.getTodayStatus = async (req, res) => {
      try {
            const today = dayjs().format("YYYY-MM-DD");

            const record = await Attendance.findOne({
                  where: { UserId: req.user.userId, date: today },
            });

            let status = "NOT_CHECKED_IN";

            if (record && record.check_in && !record.check_out) {
                  status = "CHECKED_IN";
            }

            if (record && record.check_out) {
                  status = "CHECKED_OUT";
            }

            res.json({ status });
      } catch (err) {
            console.log("Status Error:", err);
            res.status(500).json({ message: "Error fetching status ❌" });
      }
};



// TIMESHEET
exports.getTimesheet = async (req, res) => {
      try {
            const data = await Attendance.findAll({
                  where: { UserId: req.user.userId },
                  order: [["createdAt", "DESC"]],
            });

            res.json(data);
      } catch (err) {
            console.log("Timesheet Error:", err);
            res.status(500).json({ message: "Error fetching timesheet ❌" });
      }
};