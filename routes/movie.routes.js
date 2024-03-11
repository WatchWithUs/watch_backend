// const router = require("express").Router();
// const Movie = require("../models/Movie.model");
// const Collection = require("../models/Collection.model");
// const { isAuthenticated } = require("../middleware/jwt.middleware");

// // GET "/api/movies/search?q=query" => Route to search movies by title
// router.get("/search", async (req, res, next) => {
//   try {
//     const searchTerm = req.query.q;

//     const movies = await Movie.find({
//       title: { $regex: searchTerm, $options: "i" },
//     }); 

//     res.json({ movies });
//   } catch (error) {
//     console.error("Error searching movies:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // GET "/api/movies" => Route to list all available movies
// router.get("/movies", (req, res, next) => {
//   Movie.find({})
//     .then((moviesFromDB) => res.status(200).json(moviesFromDB))
//     .catch((err) => {
//       next(err);
//     });
// });

// router.post("/movies", (req, res, next) => {
//   Movie.create(req.body)
//     .then((createdMovie) => {
//       res.status(200).json(createdMovie);
//     })
//     .catch((err) => next(err));
// });

// module.exports = router;
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
    console.error("Error searching movies:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET "/api/movies" => Route to list all available movies
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((moviesFromDB) => res.status(200).json(moviesFromDB))
    .catch((err) => {
      next(err);
    });
});

// POST "/api/movies" => Route to create a new movie
router.post("/movies", (req, res, next) => {
  Movie.create(req.body)
    .then((createdMovie) => {
      res.status(200).json(createdMovie);
    })
    .catch((err) => next(err));
});

// DELETE "/api/movies/:id" => Route to delete a movie by ID
router.delete("/movies/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndDelete(movieId)
    .then((deletedMovie) => {
      if (!deletedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully", deletedMovie });
    })
    .catch((err) => next(err));
});

module.exports = router;
