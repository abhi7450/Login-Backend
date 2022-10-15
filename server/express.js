const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const compress = require("compression");
const helmet = require("helmet");
/** Routes */
const userRoutes = require("./routes/user/user.routes");
const authRoutes = require("./routes/auth/auth.routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.get("/test", (req, res) => {
  res.json({
    message: "Success",
  });
});

app.use("/", userRoutes);
app.use("/auth", authRoutes);

module.exports = app;
