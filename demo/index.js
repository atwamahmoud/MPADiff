const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const path = require("path");
const {
  getHomePageMovies,
  getMovie,
  getMovieByTitle,
} = require("./utils/movies");
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  // Get movies...
  if (req.query.title) {
    getMovieByTitle(req.query.title).then((movies) => {
      res.render("home", { movies, title: `Search results for: ${req.query.title}` });
    });
    return;
  }
  getHomePageMovies().then((movies) => {
    res.render("home", { movies, title: "IMDB" });
  });
});

app.get("/movies/:id", function (req, res) {
  // Get movies...
  getMovie(req.params.id).then((movie) => {
    res.render("movie", { movie, title: movie.name + " | IMDB" });
  });
});

app.listen(process.env.PORT);
