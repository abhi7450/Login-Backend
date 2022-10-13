require("dotenv").config();
const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb://" + (process.env.IP || "localhost") + ":" + (process.env.MONGO_PORT || "27017") + "/login",
};

module.exports = config;
