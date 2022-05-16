const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

//Template engine
app.set("view engine", "ejs");

//Render template engine route to index page
app.get("/", (req, res) => {
  res.render("pages/index", { title: "Hey", message: "Hello there!" });
});

//Linked assets folder to local server with route prefix
app.use("/static", express.static("static"));

//Error 404
app.use((req, res, next) => {
  res.status(404).send("Error 404, Sorry can't find that!");
});

//Listens to a certain port (currently on port: 3000)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
