const { Attendance } = require("../models");

exports.checkIn = async (req, res) => {
      const today = new Date().toISOString().slice(0, 10);

      const existing = await Attendance.findOne({
            where: { UserId: req.user.userId, date: today },
      });

      if (existing) return res.status(400).json({ message: "Already checked in" });

      await Attendance.create({
            UserId: req.user.userId,
            date: today,
            check_in: new Date(),
      });

      res.json({ message: "Checked in" });
};

exports.checkOut = async (req, res) => {
      const today = new Date().toISOString().slice(0, 10);

      const record = await Attendance.findOne({
            where: { UserId: req.user.userId, date: today },
      });

      if (!record) return res.status(400).json({ message: "Check-in first" });

      record.check_out = new Date();
      await record.save();

      res.json({ message: "Checked out" });
};

exports.getTodayStatus = async (req, res) => {
      const today = new Date().toISOString().slice(0, 10);

      const record = await Attendance.findOne({
            where: { UserId: req.user.userId, date: today },
      });

      let status = "NOT_CHECKED_IN";

      if (record && record.check_in && !record.check_out)
            status = "CHECKED_IN";
      if (record && record.check_out) status = "CHECKED_OUT";

      res.json({ status });
};

exports.getTimesheet = async (req, res) => {
      const data = await Attendance.findAll({
            where: { UserId: req.user.userId },
      });

      res.json(data);
};