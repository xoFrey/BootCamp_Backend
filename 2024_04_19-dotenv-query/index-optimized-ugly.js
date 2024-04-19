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

  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      titleSearch
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(titleSearch),
          )
        : movies,
    )
    .then((movies) =>
      director
        ? movies.filter((movie) =>
            movie.director.toLowerCase().includes(director),
          )
        : movies,
    )
    .then((movies) =>
      year ? movies.filter((movie) => Number(movie.year) === year) : movies,
    )
    .then((movies) =>
      genre
        ? movies.filter((movie) =>
            movie.genre.map((genre) => genre.toLowerCase().includes(genre)),
          )
        : movies,
    )
    .then((movies) =>
      minRate
        ? movies.filter((movie) => Number(movie.minRate) >= minRate)
        : movies,
    )

    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server ready at", PORT));
