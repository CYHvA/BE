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
 * Middleware
 *********************************************/
 app.use("/", express.static("static"));
 app.use(express.json());
 app.use(express.urlencoded({ extended:true }));


/*********************************************
 * Temporarily Mock Data
 *********************************************/

const songs = [
  {
    id: "nuntome",
    slug: "nun-to-me",
    title: "Nun To Me",
    artistname: "Kankan",
    year: "2020",
    genre: ["Hip-Hop", "Underground rap", "Pluggnb"],
    producer: "30nickk",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam nec tellus eleifend ornare. Curabitur sed velit consectetur purus tempus ultrices sed eget ipsum."
  },
  {
    id: "somuchcheese",
    slug: "so-much-cheese",
    title: "So Much Cheese",
    artistname: "Summrs",
    year: "2022",
    genre: ["Hip-Hop", "Underground rap", "Rage"],
    producer: ["Hudsonmajor", " Pink", " Barthow"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam nec tellus eleifend ornare. Curabitur sed velit consectetur purus tempus ultrices sed eget ipsum."
  },
  {
    id: "xo",
    slug: "XO",
    title: "XO",
    artistname: "Benjicold",
    year: "2022",
    genre: ["Hip-Hop", "Underground rap", "Pluggnb"],
    producer: "Goyxrd",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam nec tellus eleifend ornare. Curabitur sed velit consectetur purus tempus ultrices sed eget ipsum."
  }
];

/*********************************************
 * Pages
 *********************************************/

app.get("/", (req, res) => {
  res.render("pages/index", {songs: songs});
});

app.get("/details", (req, res) => {
  res.render("pages/details", {songs: songs});
});

app.get("/addsong", (req, res) => {
  res.render("pages/addsong", {songs: songs});
});

// insert data into page
app.post("/addsong", (req, res) => {
  const id = req.body.title.toLowerCase();

  songs.push ({
    id: id,
    title: req.body.title,
    artistname: req.body.artistname,
    genre: req.body.genre  
  })

  res.render("pages/addsong", {songs: songs});

});

// connection with mongodb 
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
 * Demo (Data uit local server halen)
 *********************************************/
// app.get('/',(req,res)=> {
//   let doc = '<!doctype html>';
//   doc += '<title>Songs</title>'
//   doc += '<h1>Songs</h1>'

//   songs.forEach(track => {
//         doc += "<section>";
//         doc += `<h2>${track.name}</h2>`;
//         doc += `<h3>${track.artist}</h3>`;
//         doc += `<h3>Produced by: ${track.producer}</h3>`;
//         doc += `<p>${track.year}</p>`;
//         doc += "</ul>";
//         doc += `<a href="/track/${track.id}/${track.slug}">More info</a>`; 
//         doc += "</section>";
//    });
//     res.send(doc);
// });

// app.get('/track/:id/:slug', (req, res) => {
//   const track = songs.find( element => element.id == req.params.id)
//   console.log(track);

//   let doc = '<!doctype html>';
//   doc += `<title>${track.name}</title>`;
//   doc += `<h1>${track.name}</h1>`;
//   doc += `<h2>${track.artist}</h2>`;
//   doc += `<h3>Produced by: ${track.producer}</h3>`;
//   doc += "<h2>Genre</h2>";
//   doc += "<ul>";
//   track.genre.forEach(genre => {
//     doc += `<li>${genre}</li>`;
//   })
//   doc += "</ul>";
//   doc += `<p>${track.description}</p>`;
//   res.send(doc);
// });

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
  console.log(process.env.TESTVAR);
});
