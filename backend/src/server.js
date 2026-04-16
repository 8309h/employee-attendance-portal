require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 5000;

// Start Server
async function startServer() {
      try {
            app.listen(PORT, () => {
                  console.log(`Server running on port ${PORT} 🚀`);
            });

            await sequelize.authenticate();
            console.log("Database connected");

            await sequelize.sync();
      } catch (error) {
            console.error("Database connection failed", error);
      }
}

startServer();