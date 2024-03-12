const router = require("express").Router();
const mongoose = require("mongoose");
const Collection = require("../models/Collection.model");

//User Auth
const { isAuthenticated } = require("../middleware/jwt.middleware");

// POST /collection
router.post("/collection", async (req, res, next) => {
  const { title, description, selectedMovies } = req.body;

  try {
    const newCollection = await Collection.create({ title, description });

    if (selectedMovies && selectedMovies.length > 0) {
      newCollection.movies = selectedMovies;
      await newCollection.save();
    }

    res.status(201).json(newCollection);
  } catch (error) {
    console.error("Error creating a new collection:", error);
    res.status(500).json({ message: "Error creating a new collection" });
  }
});

// GET /collection
router.get("/collection", (req, res, next) => {
  Collection.find()
    .populate("movies")
    .then((collectionFromDb) => {
      res.json(collectionFromDb);
    })
    .catch((err) => {
      console.log("Error getting list of collection");
      console.error(err);
      res.status(500).json({ message: "Error getting list of collection" });
    });
});

// GET /collection/:collectionId
router.get("/collection/:collectionId", (req, res, next) => {
  const { collectionId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(collectionId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Collection.findById(collectionId)
    .populate("movies")
    .then((collectionFromDb) => {
      if (!collectionFromDb) {
        res.status(404).json({ message: "Collection not found" });
        return;
      }
      res.json(collectionFromDb);
    })
    .catch((err) => {
      console.log("Error getting collection by id");
      console.error(err);
      res.status(500).json({ message: "Error getting collection by id" });
    });
});

// PUT /collection/:collectionId
router.put("/collection/:collectionId", async (req, res, next) => {
  const { collectionId } = req.params;
  const { title, description, selectedMovies } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(collectionId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }

    const updatedFields = {};
    if (title) updatedFields.title = title;
    if (description) updatedFields.description = description;
    if (selectedMovies) updatedFields.movies = selectedMovies;

    const updatedCollection = await Collection.findByIdAndUpdate(
      collectionId,
      updatedFields,
      { new: true } 
    );

    if (!updatedCollection) {
      res.status(404).json({ message: "Collection not found" });
      return;
    }

    res.json(updatedCollection);
  } catch (error) {
    console.error("Error updating collection:", error);
    res.status(500).json({ message: "Error updating collection" });
  }
});

// DELETE /collection/:collectionId
router.delete("/collection/:collectionId", (req, res, next) => {
  const { collectionId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(collectionId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Collection.findByIdAndDelete(collectionId)
    .then(() => {
      res.json({
        message: `Collection with ID ${collectionId} is removed successfully.`,
      });
    })
    .catch((e) => {
      console.log("Error deleting collection");
      console.error(e);
      res.status(500).json({ message: "Error deleting collection" });
    });
});

module.exports = router;
