const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
      const token = req.headers.authorization;

      if (!token) return res.status(401).json({ message: "No token" });

      try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const now = Date.now();

            if (now - decoded.lastActivity > 15 * 60 * 1000) {
                  return res.status(401).json({ message: "Session expired" });
            }

            // refresh token
            const newToken = jwt.sign(
                  { userId: decoded.userId, lastActivity: now },
                  process.env.JWT_SECRET
            );

            res.setHeader("x-token", newToken);
            req.user = decoded;

            next();
      } catch {
            return res.status(401).json({ message: "Invalid token" });
      }
};