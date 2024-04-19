import express from "express";
import dotenv from "dotenv";
import { MoviesAPI } from "./nichtunsercode/fakemoviedb.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1001;

app.use(morgan("dev"));

app.get("/movies", (req, res) => {
  MoviesAPI(process.env.API_KEY)
    .then((movies) => res.json(movies))
    .catch((err) => console.log(err));
});

app.get("/movies/genre/:genreSearch", (req, res) => {
  const genreSearch = req.params.genreSearch;
  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      movies.filter((movie) =>
        movie.genre
          .map((genre) => genre.toLowerCase())
          .includes(genreSearch.toLowerCase()),
      ),
    )
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.get("/movies/year/:yearSearch", (req, res) => {
  const yearSearch = req.params.yearSearch;
  MoviesAPI(process.env.API_KEY)
    .then((movies) => movies.filter((movie) => movie.year === yearSearch))
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.get("/movies/rating/:minRating", (req, res) => {
  const minRating = req.params.minRating;
  MoviesAPI(process.env.API_KEY)
    .then((movies) => movies.filter((movie) => Number(movie.rate) >= minRating))
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.get("/movies/director/:directorName", (req, res) => {
  const directorName = req.params.directorName;
  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      movies.filter((movie) =>
        movie.director
          .toLocaleLowerCase()
          .includes(directorName.toLocaleLowerCase()),
      ),
    )
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.get("/movies/combinedSearch/:genreSearch/:minRating", (req, res) => {
  const genreSearch = req.params.genreSearch.toLocaleLowerCase();
  const minRating = Number(req.params.minRating);
  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      movies.filter((movie) =>
        movie.genre
          .map((genre) => genre.toLocaleLowerCase())
          .includes(genreSearch),
      ),
    )
    .then((movies) => movies.filter((movie) => Number(movie.rate) >= minRating))
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server ready at", PORT));
