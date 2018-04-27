"use strict";

/** Express module configurations */
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const port = 8080;
app.use(express.static("public"));

app.engine("html", es6Renderer);
app.set("views", "html");
app.set("view engine", "html");
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

/** Page configurations */
app.get("/", (req, res) => {
  res.render("index");
});

