
const router = require('express').Router();
const Movie = require("../models/Movie.model");
const Collection = require("../models/Collection.model");

const {isAuthenticated} = require("../middleware/jwt.middleware");


// GET "/api/movies" => Route to list all available movies
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(moviesFromDB => res.status(200).json(moviesFromDB))
    .catch(err => {next(err)});
});

router.post('/movies', (req, res, next) => {
  Movie.create(req.body)
    .then(createdMovie => {
      res.status(200).json(createdMovie);
    })
    .catch(err => next(err));
});




module.exports = router;
