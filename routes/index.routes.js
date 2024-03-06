const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// GET "/api/movies" => Route to list all available movies
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(moviesFromDB => res.status(200).json(moviesFromDB))
    .catch(err => {next(err)});
});

module.exports = router;
