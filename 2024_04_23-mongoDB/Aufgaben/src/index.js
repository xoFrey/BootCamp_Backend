import express from "express";
import morgan from "morgan";
import { MovieDAO } from "./db-access/moviesDAO.js";
import { FavoriteDAO } from "./db-access/favoritesDAO.js";
import { ObjectId } from "mongodb";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// !-------------------------MOVIES---------------------------------

app.get("/api/v1/movies", (req, res) => {
  MovieDAO.findAll()
    .then((movies) => res.json(movies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not GET movies!" });
    });
});

app.get("/api/v1/movies/:movieID", (req, res) => {
  const movieID = req.params.movieID;

  Promise.all([MovieDAO.findById(movieID), FavoriteDAO.findByMovie(movieID)])
    .then(([movie, isFav]) => res.json(movie ? { ...movie, isFav } : {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not GET movies!" });
    });
});

app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;
  MovieDAO.insertOne(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not Post movies!" });
    });
});

app.delete("/api/v1/movies/:movieID", (req, res) => {
  const movieID = req.params.movieID;
  MovieDAO.deleteOne(movieID)
    .then((deleted) => res.json(deleted || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not Delete Movie!" });
    });
});

app.patch("/api/v1/movies/:movieID", (req, res) => {
  const movieID = req.params.movieID;
  const updateInfo = req.body;
  MovieDAO.updateOne(movieID, updateInfo)
    .then((result) => res.json(result || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not Delete Movie!" });
    });
});

// !-------------------------FAV---------------------------------

app.get("/api/v1/favorites", (req, res) => {
  MovieDAO.findAllFavorited()
    .then((favs) => res.json(favs || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not get Fav Movies!" });
    });
});

app.post("/api/v1/movies/:movieID/favorites", (req, res) => {
  const movieID = req.params.movieID;
  const isFav = {
    movieID: ObjectId.createFromHexString(movieID),
    test: req.body.test,
  };
  FavoriteDAO.insertOne(isFav)
    .then((isFav) => res.json(isFav || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not post Movie!" });
    });
});

app.patch("/api/v1/movies/:movieID/favorites", (req, res) => {
  const movieID = req.params.movieID;
  const isFav = {
    movieID: ObjectId.createFromHexString(movieID),
    test: req.body.test,
  };
  FavoriteDAO.updateOne(movieID, isFav)
    .then((isFav) => res.json(isFav || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not post Movie!" });
    });
});

app.delete("/api/v1/favorites/:favId", (req, res) => {
  FavoriteDAO.deleteOne(req.params.favId)
    .then((deleted) => res.json(deleted || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not Delete Movie!" });
    });
});

const PORT = 1001;
app.listen(PORT, () => console.log("Server ready at", PORT));
