const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Collection = require("../models/Collection.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

// GET "/api/movies/search?q=query" => Route to search movies by title
router.get("/search", async (req, res, next) => {
  try {
    const searchTerm = req.query.q;

    const movies = await Movie.find({
      title: { $regex: searchTerm, $options: "i" },
    }); 

    res.json({ movies });
  } catch (error) {
    console.error("Erro ao pesquisar filmes:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// GET "/api/movies" => Route to list all available movies
//router.get("/movies", (req, res, next) => {
router.get("/", (req, res, next) => {
  Movie.find({})
    .then((moviesFromDB) => res.status(200).json(moviesFromDB))
    .catch((err) => {
      next(err);
    });
});

//router.post("/movies", (req, res, next) => {
  router.post("/", (req, res, next) => {
  Movie.create(req.body)
    .then((createdMovie) => {
      res.status(200).json(createdMovie);
    })
    .catch((err) => next(err));
});

module.exports = router;
