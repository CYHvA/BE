const { name } = require("ejs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const dotenv = require("dotenv").config();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

/*********************************************
 * Template Engine
 *********************************************/
 app.set("view engine", "ejs");

/*********************************************
 * Middlewares
 *********************************************/
 app.use(express.static("static"));
 app.use(express.json());
 app.use(express.urlencoded({ extended:true }));

/*********************************************
 * Misc. Vars
 *********************************************/
let db = null;

/*********************************************
 * Pages
 *********************************************/

// Connection with the database
app.get("/", async (req, res) => {
  const query = {};
  const tracklist = await db.collection("songs"). find({},{}).toArray();
  const error = (tracklist.length == 0) ? "No tracks are found" : "tracklist";

  // Retrieves data from the database to the index page
  let song = {
    title: req.body.title,
    artistname: req.body.artistname,
    year: req.body.year,
    producer: req.body.producer,
    genre: req.body.genre
  };

  // Renders profile page including the given data "error, tracklist and song"
  res.render("pages/profile", {error, tracklist, song});
});

app.get("/addsong", async(req,res) => {
    res.render("pages/addsong", {});
});

// Adds inserted song via form to database
app.post("/addsong", async (req, res) => {

  let add = {
    title: req.body.title,
    artistname: req.body.artistname,
    year: req.body.year,
    producer: req.body.producer,
    genre: req.body.genre
  };

  await db.collection("songs").insertOne(add);

  const query = {};
  const tracklist = await db.collection("songs").find(query).toArray();
  res.render("pages/profile", {tracklist});
});

// Connection with MongoDB
async function connectDB() {
  const uri = process.env.DB_URI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
};

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
  connectDB().then(console.log("Connection with MongoDB has succeeded."));
});
