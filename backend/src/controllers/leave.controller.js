const { Leave } = require("../models");

exports.applyLeave = async (req, res) => {
      await Leave.create({
            ...req.body,
            UserId: req.user.userId,
      });

      res.json({ message: "Leave applied" });
};

exports.getLeaves = async (req, res) => {
      const data = await Leave.findAll({
            where: { UserId: req.user.userId },
      });

      res.json(data);
};