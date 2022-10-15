const config = require("../config/config");
const app = require("./express");
const mongoose = require("mongoose");

function startServer(app) {
  app.listen(config.port, async (err) => {
    if (err) {
      console.log(err);
    }
    console.info("Sever started on port %s.", config.port);
    try {
      await mongoose.connect(config.mongoUri);
      console.log("DB Connection Success");
    } catch (err) {
      throw new Error(`Unable to connect to database: ${config.mongoUri}`);
    }
  });
}
startServer(app);
