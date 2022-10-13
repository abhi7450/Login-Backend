const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const compress = require("compression");
const helmet = require("helmet");

const app = express();

express.json();
express.urlencoded({ extended: true });
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

module.exports = app;
