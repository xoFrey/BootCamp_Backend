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
    .then((movies) => {
      return movies
        .filter((movie) =>
          titleSearch ? movie.title.toLowerCase().includes(titleSearch) : true,
        )
        .filter((movie) => (year ? movie.year === year : true))
        .filter((movie) =>
          director ? movie.director.toLowerCase().includes(director) : true,
        )
        .filter((movie) =>
          genre
            ? movie.genre.map((genre) => genre.toLowerCase().includes(genre))
            : true,
        )
        .filter((movie) => (minRate ? Number(movie.minRate) >= minRate : true));
    })
    .then((filtered) => res.json(filtered))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server ready at", PORT));
