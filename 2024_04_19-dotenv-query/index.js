import express from "express";
import dotenv from "dotenv";
import { MoviesAPI } from "./nichtunsercode/fakemoviedb.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1001;

app.use(morgan("dev"));

app.get("/movies", (req, res) => {
  const titleSearch = req.query.titleSearch?.toLowerCase();
  const year = req.query.year;
  const director = req.query.director?.toLowerCase();
  const genre = req.query.genre?.toLowerCase();
  const minRate = Number(req.query.minRate) || 0;

  const filterIf = (value, array, filter) =>
    value ? array.filter(filter) : filter;

  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      filterIf(titleSearch, movies, (movie) =>
        movie.title.toLowerCase().includes(titleSearch),
      ),
    )
    .then((movies) =>
      filterIf(year, movies, (movie) => Number(movie.year) === year),
    )
    .then((movies) =>
      filterIf(director, movies, (movie) =>
        movie.director.toLowerCase().includes(director),
      ),
    )
    .then((movies) =>
      filterIf(genre, movies, (movie) =>
        movie.genre.map((genre) => genre.toLowerCase().includes(genre)),
      ),
    )
    .then((movies) =>
      filterIf(minRate, movies, (movie) => Number(movie.minRate) >= minRate),
    )
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server ready at", PORT));
