const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { routes } = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve("./frontend")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

module.exports = {
    appWithRoutes: app,
};