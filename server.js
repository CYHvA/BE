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
    genre: ["hip-hop", "underground rap", "pluggnb"],
    producer: "30nickk",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam nec tellus eleifend ornare. Curabitur sed velit consectetur purus tempus ultrices sed eget ipsum."
  },
  {
    id: 2,
    slug: "so-much-cheese",
    name: "So Much Cheese",
    artist: "Summrs",
    year: "2022",
    genre: ["hip-hop", "underground rap", "rage"],
    producer: ["Hudsonmajor", " Pink", " Barthow"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam nec tellus eleifend ornare. Curabitur sed velit consectetur purus tempus ultrices sed eget ipsum."
  },
  {
    id: 3,
    slug: "XO",
    name: "XO",
    artist: "Benjicold",
    year: "2022",
    genre: ["hip-hop", "underground rap", "pluggnb"],
    producer: "Goyxrd",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam nec tellus eleifend ornare. Curabitur sed velit consectetur purus tempus ultrices sed eget ipsum."
  }
];

/*********************************************
 * Template Engine
 *********************************************/
app.set("view engine", "ejs");

/*********************************************
 * Pages
 *********************************************/

app.get("/home", (req, res) => {
  res.render("pages/index", {});
});

app.get("/addsong", (req, res) => {
  res.render("pages/form", {});
});

/*********************************************
 * Demo (Data uit local server halen)
 *********************************************/
app.get('/',(req,res)=> {
  let doc = '<!doctype html>';
  doc += '<title>Songs</title>'
  doc += '<h1>Songs</h1>'

  songs.forEach(track => {
        doc += "<section>";
        doc += `<h2>${track.name}</h2>`;
        doc += `<h3>${track.artist}</h3>`;
        doc += `<h3>Produced by: ${track.producer}</h3>`;
        doc += `<p>${track.year}</p>`;
        doc += "</ul>";
        doc += `<a href="/track/${track.id}/${track.slug}">More info</a>`; 
        doc += "</section>";
   });
    res.send(doc);
});

app.get('/track/:id/:slug', (req, res) => {
  const track = songs.find( element => element.id == req.params.id)
  console.log(track);

  let doc = '<!doctype html>';
  doc += `<title>${track.name}</title>`;
  doc += `<h1>${track.name}</h1>`;
  doc += `<h2>${track.artist}</h2>`;
  doc += `<h3>Produced by: ${track.producer}</h3>`;
  doc += "<h2>Genre</h2>";
  doc += "<ul>";
  track.genre.forEach(genre => {
    doc += `<li>${genre}</li>`;
  })
  doc += "</ul>";
  doc += `<p>${track.description}</p>`;
  res.send(doc);
});

/*********************************************
 * Middleware
 *********************************************/
app.use("/", express.static("static"));

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
