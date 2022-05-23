const { name } = require("ejs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
// const dotenv = require("dotenv").config();
// const { MongoClient } = require("mongodb");
// const { ObjectId } = require("mongodb");

// async function connectDB() {
//   const uri = process.env.DB_URI;

//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,

//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();

//     db = client.db(process.env.DB_NAME);
//   } catch (error) {
//     throw error;
//   }
// }

/*********************************************
 * Data
 *********************************************/
const songsData = require("./data/mockdata.js");

/*********************************************
 * Temporarily Mock Data
 *********************************************/

const songs = [
  {
    id: 1,
    slug: "nun-to-me",
    name: "Nun To Me",
    artist: "Kankan",
    year: "2020",
    genre: ["hip-hop", "underground rap"],
  },
  {
    id: 2,
    slug: "so-much-cheese",
    name: "So Much Cheese",
    artist: "Summrs",
    year: "2022",
    genre: ["hip-hop", "underground rap"],
  },
];

/*********************************************
 * Template Engine
 *********************************************/
app.set("view engine", "ejs");

/*********************************************
 * Pages
 *********************************************/
// app.get("/", (req, res) => {

//   let doc = '
//   songs.forEach( name => {
//     res.send(`<h1>${songs.name}</h1>`)
//   })
// });

app.get("/home", (req, res) => {
  res.render("pages/index", {});
});

app.get("/addsong", (req, res) => {
  res.render("pages/form", {});
});

/*********************************************
 * Middleware
 *********************************************/
app.use("/static", express.static("static"));

/*********************************************
 * Error 404
 *********************************************/
app.use((req, res, next) => {
  res.status(404).send("Error 404, Sorry can't find that!");
});

/*********************************************
 * Listens to a certain port (currently on port: 3000)
 *********************************************/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
